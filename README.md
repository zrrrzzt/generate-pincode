[![Build Status](https://travis-ci.org/zrrrzzt/generate-pincode.svg?branch=master)](https://travis-ci.org/zrrrzzt/generate-pincode)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/generate-pincode/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/generate-pincode?branch=master)
# generate-pincode

Node.js module/CLI app for generating pincodes.

## Installation

```sh
$ npm install generate-pincode
```

Install it globally to use the CLI version

```sh
$ npm install generate-pincode -g
```

## Usage - module

```sh
var gpc = require('generate-pincode');
var pin = gpc(4)

console.log(pin)

// => 1234
```

## Usage - cli

If not supplied with a length it returns a four digit pincode.

```sh
$ generate-pincode
```

Optionally

```sh
$ generate-pincode <length>
```

To see version number

```sh
$ generate-pincode -v
```

To see help

```sh
$ generate-pincode -h
```