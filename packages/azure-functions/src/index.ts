import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { WhatwgHttpServer, HttpServerImplementation, Request, Response } from '@whatwg-http-server/core';
import parseRequest from './request-parsing';
import setResponse from './response-setting';
import { default as AzureFunctionsResponse } from './azure-functions-response';

const toServer: WhatwgHttpServer<AzureFunction> = (func: HttpServerImplementation) => {
  const trigger: AzureFunction = async (context: Context, req: HttpRequest) => {
    const request: Request = parseRequest(req);
    const response = new Response();

    await (async () => func(request, response))();

    setResponse(context.res as AzureFunctionsResponse, response);
  }
  return trigger;
};

export default toServer;
