# WHATWG HTTP Server
> An universal way to implement HTTP server listeners, using WHATWG-similar standards. Translates your endpoint to many HTTP server implementations, like Node.js, Express.js, Azure Functions and more.

## Problem

[WHATWG Fetch API](https://fetch.spec.whatwg.org/) standardized the way we treat HTTP Request and Response objects in browser, but **JavaScript HTTP servers don't follow any standard**.

This makes your API **bounded to a specific framework** and harder to change it to another application environment because the vendor lock-in.

Some comparative examples of different HTTP server implementations in JavaScript:

<table>
  <tr>
    <td>Node.js native HTTP</td>
    <td>Express.js</td>
    <td>Azure Functions</td>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/2074685/146836384-45f9447c-adce-4a32-b910-d1953b9f3222.png" /></td>
    <td><img src="https://user-images.githubusercontent.com/2074685/146836673-443de78e-75db-4586-aeeb-64a3ccf8732a.png" /></td>
    <td><img src="https://user-images.githubusercontent.com/2074685/146836718-0f8566f5-09db-46bd-89ff-f2e47cb2c128.png" /></td>
  </tr>
</table>

This way your endpoint logic is bounded to specific request/response types, each one with different properties, methods and HTTP response approachs, without any convention.


## Solution

1. Define your API using WHATWG-similar types
2. Export it like anything your server needs

![chrome-capture](https://user-images.githubusercontent.com/2074685/146835800-1db8acb9-7d38-4fce-9fa4-078d209e721d.gif)

This way you can easily change from and to any framework or application environment, **without changing your main code logic**.

## Usage

### Installing

### Defining the endpoint logic

[Differences from WHATWG Fetch API types](markdown/WHATWG_DIFFERENCES.md)
## HTTP server implementations

- [ ] [Native Node.js HTTP server]()
- [ ] [Express.js]()
- [ ] [Hapi]()
- [ ] [Koa]()
- [ ] [Amazon Lambda]()
- [X] [Azure Functions]()
- [ ] [Google Cloud Functions]()

## Conttributing

## License