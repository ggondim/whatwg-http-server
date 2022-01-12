import { URL } from 'url';
import Headers from './headers';

type ResponseBodyType = 'buffer' | 'json' | 'text';

export interface IResponse {
  readonly body?: any;
  readonly bodyType?: ResponseBodyType;
  headers: Headers;
  readonly ok: boolean;
  readonly redirected: boolean;
  status: number;
  statusText: string;
  readonly type: ResponseType;
  readonly url: string;
  clone(): Response;

  arrayBuffer(contents: Buffer): void;
  json(result: any): void;
  text(text: string, contentType?: string): void;
  redirect(url: string | URL, status: number): void;
}

export default class Response implements IResponse {
  constructor() {
    this.headers = new Headers();
  }

  private _body?: any;
  get body() {
    return this._body;
  }

  private _bodyType: ResponseBodyType;
  get bodyType() {
    return this._bodyType;
  };

  headers: Headers;

  get ok(): boolean {
    return this.status >= 200 && this.status < 300;
  }

  get redirected(): boolean {
    return this.status >= 300
      && this.status < 400
      && this.headers.has('location')
      && this.url && this.url !== '';
  }

  status: number;
  statusText: string;
  type: ResponseType;

  private _url: string;
  get url() {
    return this._url;
  }

  clone(): Response {
    throw new Error('Method not implemented.');
  }

  arrayBuffer(contents: Buffer): void {
    this._body = contents;
    this._bodyType = 'buffer';
  }

  json(result: any): void {
    this._body = result;
    this._bodyType = 'json';
  }

  text(text: string, contentType = 'text/plain'): void {
    this._body = text;
    this._bodyType = 'text';
    this.headers.set('content-type', contentType);
  }

  redirect(url: string | URL, status: number = 302): void {
    this.status = status;
    this._url = url.toString();
    this.headers.set('location', this.url);
  }
}