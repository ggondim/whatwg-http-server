import Request from './request';
import Response from './response';

/**
 * Defines a generic HTTP server implementation function
 * @export
 * @interface HttpServerImplementation
 */
export interface HttpServerImplementation {
  /**
   * @param {Request} req
   * @param {Response} res
   * @return {(void|Promise<void>)}
   * @memberof HttpServerImplementation
   */
  (req: Request, res: Response): void|Promise<void>
}

/**
 *
 *
 * @export
 * @interface WhatwgHttpServer
 * @template T
 */
export default interface WhatwgHttpServer<T = any> {
  (serverImplementation: HttpServerImplementation): T;
}