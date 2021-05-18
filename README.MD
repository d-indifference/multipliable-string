# multiplieble-string [![NPM version](https://img.shields.io/npm/v/multiplieble-string.svg?style=flat)](https://www.npmjs.com/package/multiplieble-string) [![NPM monthly downloads](https://img.shields.io/npm/dm/multiplieble-string.svg?style=flat)](https://npmjs.org/package/multiplieble-string) [![NPM total downloads](https://img.shields.io/npm/dt/multiplieble-string.svg?style=flat)](https://npmjs.org/package/multiplieble-string)

> A class for creating a multiplieble strings, which you can multiply as same, as in Python

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save multiplieble-string
```

## Usage

You can import class `MultipliebleString` and work with it as same, as with `String` class in JavaScript. For multiply you should call the `multiply()` method.

```js
const MultipliebleString = require('multiplieble-string');

console.log(`Javascript goes b${new MultipliebleString('r').multiply(30)}`); //=> Javascript goes brrrrrrrrrrrrrrrrrrrrrrrrrrrrrr

const myVar = new MultipliebleString('Test');
console.log(myVar.multiply(10)); //=> TestTestTestTestTestTestTestTestTestTest
```

### Author

**Sailor Alba**

* [GitHub Profile](https://github.com/sailor-alba)
* [Twitter Profile](https://twitter.com/alba_sailor)

### License

Copyright © 2021, [Sailor Alba](https://twitter.com/alba_sailor).
Released under the [MIT License](LICENSE).

***