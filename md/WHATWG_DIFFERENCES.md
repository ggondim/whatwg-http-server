## Differences from WHATWG Fetch API types

Because WHATWG Fetch API was mainly designed for writing HTTP requests and reading HTTP responses and HTTP Servers needs the opposite, there are some differences between WHATWG Fetch API types and WHATWG HTTP Server types.

> **Legend**
> <br/>...
> <br/>✅ Identical in both WHATWG types
> <br/>🌟 Property or method added in this library
> <br/>💱 Something changed from the original WHATWG Fetch API implementation
> <br/>❌ A WHATWG Fetch API property or method not present in this library
> <br/>🆘 Not yet implemented. Conttribution needed.

### Request

> 💱 **extends**: Instead inheriting from `Body` type, request body now has its own `RequestBody` inheritance.

| | Property/method | WHATWG Fetch | WHATWG HTTP Server | Justification |
| --- | --- | --- | --- | --- |
| 🆘 | cache | `readonly` `RequestCache` |
| 🆘 | credentials | `readonly` `RequestCredentials` |
| 🆘 | destination | `readonly` `RequestDestination` |
| 💱 | headers | `readonly` `Headers` (DOM implementation) | `readonly` **`Headers` (node-fetch implementation)** |
| 🆘 | integrity | `readonly` `string` |
| 🆘 | keepalive | `readonly` `boolean` |
| ✅ | method | `readonly` `string` | `readonly` `string` |
| 🆘 | mode | `readonly` `RequestMode` |
| 🌟 | rawUrl | | `readonly` `string` | Created to keep an access to the URL as string.
| 🆘 | redirect | `readonly` `RequestRedirect` |
| 🆘 | referrer | `readonly` `string` |
| 🆘 | referrerPolicy | `readonly` `ReferrerPolicy` |
| ❌ | referrerPolicy | `signal` `AbortSignal` | | Not applicable to a Request in the server |
| 💱 | url | `readonly` `string` | `readonly` **`URL` (Native WHATWG URL type)** | Original URL string is accessed by new `rawUrl` property instead. |

### Body → RequestBody

The original Body type now is `RequestBody` for requests.

> 🌟 **type arguments**: `<T = any>` is introduced as an optional type argument for `RequestBody`.

| | Property/method | WHATWG Fetch | WHATWG HTTP Server | Justification |
| --- | --- | --- | --- | --- |
| 💱 | body | `readonly` `ReadableStream<Uint8Array> \| null` | `readonly` **`T?`** |
| ❌ | bodyUsed | `readonly` `boolean` | | Since `body` property cannot be a stream, this property is not applicable in the server. |
| 💱 | arrayBuffer() | `Promise<ArrayBuffer>` | **`Promise<Buffer>`** |
| ❌ | blob() | `Promise<Blob>` | | Not applicable as there is no Blob implementation or necessity in Node.js |
| 💱 | formData() | `Promise<FormData>` | **`Promise<FormDataEntry[]>`** | Since original `FormData` type is bounded to an specific client implementation of `File` API, a new `FormDataEntry` type was introduced to work with form-data requests. |
| ✅ | json() | `readonly` `any` | `readonly` `any` |
| ✅ | text() | `readonly` `string` | `readonly` `string` |