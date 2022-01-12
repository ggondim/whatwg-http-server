import { HttpRequest } from "@azure/functions";
import { Buffer } from 'buffer';
import { getBoundary, parse } from 'parse-multipart-data';
import { URL } from 'url';
import { Headers, Request, RequestBody, FormDataEntry, FormDataFile, FormDataValue } from '@whatwg-http-server/core';

// Azure Functions body types is limited to ITypedData from RPC
// https://github.com/Azure/azure-functions-nodejs-worker/blob/v3.x/src/converters/RpcConverters.ts#L21


// string | object (parsed JSON) | Buffer | number
type AzureRequestBody = string | object | Buffer | number;

function arrayBufferFunc(body: AzureRequestBody) {
  if (Buffer.isBuffer(body)) {
    return async () => body as Buffer;
  }

  return async () => Buffer.from(typeof body === 'object'
    ? JSON.stringify(body)
    : body.toString());
}

function formDataFunc(req: HttpRequest): () => Promise<FormDataEntry[]> {
  if (!req.rawBody || req.rawBody === '') {
    return async () => [] as FormDataEntry[]
  }

  return async () => {
    const rawBuffer = Buffer.from(req.rawBody);
    const boundary = getBoundary(req.headers['content-type']);
    const parts = parse(rawBuffer, boundary);
    // https://github.com/nachomazzara/parse-multipart-data/blob/master/src/multipart.ts#L20
    return parts.map(({ filename, type, data, name}) => {
      if (filename) {
        return { isFile: true, filename, type, data } as FormDataFile;
      }
      return { name: name.toString(), value: data.toString() } as FormDataValue;
    }) as FormDataEntry[];
  };
}

export default function parseRequest(req: HttpRequest): Request {
  const body = {
    body: req.body,
    arrayBuffer: arrayBufferFunc(req.body as AzureRequestBody),
    formData: formDataFunc(req),
    json: async () => req.body as AzureRequestBody,
    text: async () => req.rawBody as string
  } as RequestBody<AzureRequestBody>;

  const request: Request = {
    ...body,
    headers: new Headers(req.headers),
    method: req.method.toUpperCase(),
    url: new URL(req.url),
    rawUrl: req.url,
  } as Request;

  return request;
}