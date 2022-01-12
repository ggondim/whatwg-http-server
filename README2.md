<h1 align="center">
  <br>
  WHATWG HTTP Server 🧩
  <br>
</h1>

<p align="center">An universal way to implement HTTP server listeners, using WHATWG-similar standards. Translates your endpoint to many HTTP server implementations, like Node.js, Express.js, Azure Functions and more.</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/@whatwg-http-server/core" />
  <img src="https://img.shields.io/bundlephobia/min/@whatwg-http-server/core" />
  <img src="https://img.shields.io/github/last-commit/openmetaweb/whatwg-http-server" />
</p>

<hr>

<p align="center">
  <a href="#">Basic usage</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Installation</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Advanced usage</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">API</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#">Table of contents</a>
</p>

<hr>

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

This way your endpoint logic is bounded to specific request/response types, each one with different properties, methods and HTTP response approachs, **without any convention**.


## Solution

1. Define your API using WHATWG-similar types
2. Export it like anything your server needs

![chrome-capture](https://user-images.githubusercontent.com/2074685/148466983-8190cdbb-d773-4b31-81f4-2c753a8061da.gif)

This way you can easily change from and to any framework or application environment, **without changing your main code logic**.

See more usage topics in [usage](#usage) section. 
<br><hr>

## Table of contents

<ul>
  <li>
    <details>
      <summary><a href="#Installation">Installation</a></summary>
      <ul>
        <li><a href="#Requirements">Requirements</a></li>
        <li><a href="#Installing">Installing</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#Usage">Usage</a></summary>
      <ul>
        <li><a href="#TLDR">TL;DR - The most simple usage</a></li>
        <li><a href="#example">An example title</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#Extending">Extending</a></summary>
      <ul>
        <li><a href="#example">An example title</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#Help">Help</a></summary>
      <ul>
        <li><a href="#FAQ">FAQ</a></li>
        <li><a href="#Support">Support</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#API">API</a></summary>
      <ul>
        <li><a href="#example">An example title</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#Tecnhical-concepts">Technical concepts</a></summary>
      <ul>
        <li><a href="#Motivation-and-design">Motivation and design</a></li>
        <li><a href="#Features">Features</a></li>
        <li><a href="#Related-projects">Related projects</a></li>
        <li><a href="#Similar-projects">Similar projects</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#Contributing">Contributing</a></summary>
      <ul>
        <li><a href="#If-you-don-t-want-to-code">If you don't want to code</a></li>
        <li><a href="#If-you-want-to-code">If you want to code</a></li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#Hall-of-fame">Hall of fame</a></summary>
      <ul>
        <li><a href="#who-is-using">Who is using</a></li>
        <li><a href="#Contributors">Contributors</a></li>
        <li><a href="#Backers">Backers</a></li>
        <li><a href="#Sponsors">Sponsors</a></li>
      </ul>
    </details>
  </li>
  <li><a href="#License">License</a></li>
</ul>

---

## Installation

### Requirements

![](https://img.shields.io/static/v1?label=npm&message=6.14.5&color=brightgreen) ![](https://img.shields.io/static/v1?label=node&message=12.16.3&color=brightgreen) ![](https://img.shields.io/static/v1?label=os&message=ubuntu-20.04&color=blueviolet) ![](https://img.shields.io/static/v1?label=platforms&message=node|browser&color=777) ![](https://img.shields.io/static/v1?label=platforms&message=isomorphic&color=orange)

WHATWG HTTP Server was tested for the environments below. Even we believe it may works in older versions or other platforms, **it is not intended to**.

<details>
  <summary><b>See tested environments</b></summary>

| Environment  |  Tested version  |
| ------------------- | ------------------- |
|  OS |  Ubuntu 20.04 |
|  Node.js |  12.16.3 |
|  Package Manager |  npm 6.14.5 |
|  Platforms |  server, browser (Chrome latest) |

</details>

### Installing

#### Via package manager

![](https://nodei.co/npm/@whatwg-http-server/core.png?downloads=true&downloadRank=true&stars=true)

```shell
$ npm install --save @whatwg-http-server/core
```
<details>
  <summary><b>See other options</b></summary>

#### Yarn

```shell
$ yarn add @whatwg-http-server/core
```

#### Unpkg

[https://unpkg.com/:@whatwg-http-server/core](https://unpkg.com/:@whatwg-http-server/core)

```javascript
<script src="https://unpkg.com/:@whatwg-http-server/core" />
```

</details>

### Module/language support

![](https://img.shields.io/static/v1?label=modules&message=ES%20Modules%20|%20CommonJS&color=yellow) 
![](https://img.shields.io/static/v1?label=javascript&message=ECMA2015&color=yellow)

This means you:

* **May** use the module with `import`, `require` or `define`
* **Should** use polyfills or transpilation if you want to support older environments

<details>
  <summary><b>See JavaScript features used by this package and its versions</b></summary>

| Version  |  Features used  |
| -------- | --------------- |
| ES5 | all common features |
| ES6 | const, class, destructuring binding, default parameters, let, object short notation, arrow function syntax, template literal syntax |
| ES8 | async functions, trailing comma in arguments lists |
| ES9 | object spread property |

</details>

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## Usage

### An example title of an advanced usage topic

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## Extending

### Writing plugins

### Community plugins

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## Help

### FAQ

<details>
  <summary><b>1. First question?</b></summary>

Answer here

</details>

### Support

![](https://img.shields.io/github/issues/openmetaweb/whatwg-http-server)

If you need help or have a problem with this project and you not found you problem in FAQ above, [start an issue](https://github.com/openmetaweb/whatwg-http-server/issues).

> We will not provide a SLA to your issue, so, don't expect it to be answered in a short time.

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## API

### `ClassOrModule.js` _class|module_

#### Members

<details>
  <summary>
    <b>
      <code>memberName</code> 
      <i>type?_=<code>defaultValue</code></i>
    </b>
  </summary>

> Description what it is

</details>

#### Properties

<details>
  <summary>
    <b>
      <code>propertyName</code> 
      <i>type</i>
    </b>
  </summary>

> Description of what it is

</details>

#### Methods

<details>
  <summary>
    <b>
      <code>methodName()</code> 
      <i>function(arg1, optional?):ReturnType</i>
    </b>
  </summary>



> Description what it does

**Arguments**

| Argument | Type | Required | Default | Description |
| - | - | - | - | - |
| arg1 | `Type` | true | `default` | Description of argument |

**Returns**

`AzureFunctionCascade` the current instance of AzureFunctionCascade.

**Callbacks**

##### `arg1Callback` _async function (context, STOP_SIGNAL?):any_

| Argument | Type | Required | Default | Description |
| - | - | - | - | - |
| arg1 | `Type` | true | `default` | Description of argument |

Returns: description of callback return.

</details>

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## Tecnhical concepts

### Motivation and design

WHATWG HTTP Server was inspired from ...

### Features

Beyond the features previous listed, WHATWG HTTP Server also have: 

* Feature

### Related projects

* [Project 1]()

### Similar projects

* [Project 1]()

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## Contributing

### If you don't want to code

Help us spreading the word or consider making a donation.

#### Star the project

![](https://img.shields.io/github/stars/openmetaweb/whatwg-http-server?style=social)

#### Tweet it

![](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2Fopenmetaweb%2Fwhatwg-http-server)

#### Donate

![](https://c5.patreon.com/external/logo/become_a_patron_button.png)

![](https://camo.githubusercontent.com/b8efed595794b7c415163a48f4e4a07771b20abe/68747470733a2f2f7777772e6275796d6561636f666665652e636f6d2f6173736574732f696d672f637573746f6d5f696d616765732f707572706c655f696d672e706e67)

<img src="https://opencollective.com/webpack/donate/button@2x.png?color=blue" width=250 />

#### Add your company name to the [Who is using](#Who-is-using) secion

Make a pull request or start an issue to add your company's name.

### If you want to code

![](https://img.shields.io/static/v1?label=code%20style&message=eslint/airbnb&color=orange) 

#### Code of conduct

![](https://img.shields.io/static/v1?label=Code%20of%20conduct&message=Contributor%20Covenant&color=informational)

We follow [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md). If you want to contribute to this project, you must accept and follow it.

#### SemVer

![](https://img.shields.io/static/v1?label=semver&message=2.0.0&color=informational)

This project adheres to [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

#### Roadmap

If you are not solving an issue or fixing a bug, you can help developing the roadmap below.

<details>
  <summary>
    <b>See the roadmap</b>
  </summary>

* [ ] Create something
* [ ] Improve documentation

</details>


<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## Hall of fame

### Who is using

* [Company]()

### Contributors

[![](https://sourcerer.io/fame/$USER/$OWNER/$REPO/images/0)](https://sourcerer.io/fame/openmetaweb/${OWNER}/whatwg-http-server/links/0)

### Backers

<object type="image/svg+xml" data="https://opencollective.com/collective/tiers/backers.svg?avatarHeight=36&width=600"></object>

### Sponsors

<object type="image/svg+xml" data="https://opencollective.com/collective/tiers/Sponsors.svg?avatarHeight=36&width=600"></object>

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

## License

![](https://img.shields.io/github/license/openmetaweb/whatwg-http-server)

Licensed under the [MIT License](LICENSE.md).

<br/>

<p align="right"><a href="#Table-of-contents">↟ Back to top</a></p>

---

