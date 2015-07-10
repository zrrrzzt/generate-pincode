[![Build Status](https://travis-ci.org/zrrrzzt/generate-pincode.svg?branch=master)](https://travis-ci.org/zrrrzzt/generate-pincode)
# generate-pincode

Node.js module/CLI app for generating pincodes.

## Installation

```
$ npm install generate-pincode
```

Install it globally to use the CLI version

```
$ npm install generate-pincode -g
```

## Usage - module

```sh
var gpc = require('generate-pincode');

gpc(4)
// => 1234
```

##Usage - cli

If not supplied with a length it returns a four digit pincode.

```
$ generate-pincode
```

Optionally

```
$ generate-pincode <length>
```

To see version number

```
$ generate-pincode -v
```

To see help

```
$ generate-pincode -h
```