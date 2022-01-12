/// <reference lib="DOM" />

import { URL } from 'url';
import Headers from './headers';

import { FormDataEntry } from "./form-data";

/**
 * Body interface derived from WHATWG Fetch API
 * @see {@link https://github.com/microsoft/TypeScript/blob/main/lib/lib.dom.d.ts#L2442}
 * @export
 * @interface Body
 * @template [T?=any] Type of the original body value from the HTTP server implementation.
 */
export interface RequestBody<T = any> {
  /**
   * Original body value from a specific HTTP server implementation.
   * @type {T}
   * @memberof RequestBody
   */
  readonly body?: T;

  /**
   * NOT APPLICABLE: `body` property cannot be a stream.
   * @type {never}
   * @memberof RequestBody
   */
  bodyUsed: never;

  /**
   * Reads HTTP Request Body as a Buffer instead original ArrayBuffer from WHATWG Fetch API.
   * @async
   * @return {Promise<Buffer>} The body as Buffer.
   * @memberof RequestBody
   */
  arrayBuffer(): Promise<Buffer>;

  /**
   * NOT APPLICABLE: there is no `Blob` in Node.js.
   * @return {never}
   * @memberof RequestBody
   */
  blob(): never;

  /**
   * Returns the body as form-data parts.
   * @return {Promise<FormDataEntry[]>}
   * @memberof RequestBody
   */
  formData(): Promise<FormDataEntry[]>;

  /**
   * Returns the body as a parsed JSON value.
   * @return {Promise<any>}
   * @memberof RequestBody
   */
  json(): Promise<any>;

  /**
   * Returns the body as plain text.
   * @return {Promise<string>}
   * @memberof RequestBody
   */
  text(): Promise<string>;
}

/**
 * This interface represents a resource request, inspired from original WHATWG Fetch API.
 * @export
 * @interface Request
 * @extends {RequestBody}
 */
export default interface Request extends RequestBody {
  /**
   * Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.
   */
    readonly cache: RequestCache;
    /**
    * Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.
    */
    readonly credentials: RequestCredentials;
    /**
    * Returns the kind of resource requested by request, e.g., "document" or "script".
    */
    readonly destination: RequestDestination;
    /**
    * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
    */
    readonly headers: Headers;
    /**
     * Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
     */
     readonly integrity: string;
     /**
      * Returns a boolean indicating whether or not request can outlive the global in which it was created.
      */
     readonly keepalive: boolean;
     /**
      * Returns request's HTTP method, which is "GET" by default.
      */
     readonly method: string;
     /**
      * Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.
      */
     readonly mode: RequestMode;
     /**
      * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
      */
     readonly redirect: RequestRedirect;
     /**
      * Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.
      */
     readonly referrer: string;
     /**
      * Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.
      */
     readonly referrerPolicy: ReferrerPolicy;
     /**
      * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
      */
     readonly signal: never;
     /**
      * Returns the URL of request as a URL.
      */
     readonly url: URL;

     /**
      * Returns the URL of request as a string.
      */
     readonly rawUrl: string;

     /**
      * Request URL params if HTTP server implements it.
      * @type {Record<string, any>}
      * @memberof Request
      */
     readonly params?: Record<string, any>;

     clone: never;
 
}
