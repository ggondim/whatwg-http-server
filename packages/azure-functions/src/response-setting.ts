
import { default as AzureResponse } from './azure-functions-response';
import { Response as HttpResponse } from '@whatwg-http-server/core';

export default function setResponse(azureResponse: AzureResponse, httpResponse: HttpResponse) {

  azureResponse.statusCode = httpResponse.status;
  azureResponse.headers = httpResponse.headers.toObject();

  azureResponse.body = httpResponse.body;
  if (httpResponse.bodyType === 'buffer') {
    azureResponse.type('application/octet-stream');
  } else if (httpResponse.bodyType === 'json') {
    azureResponse.type('application/json');
  }
}