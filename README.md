[![Build Status](https://travis-ci.org/zrrrzzt/generate-pincode.svg?branch=master)](https://travis-ci.org/zrrrzzt/generate-pincode)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/generate-pincode/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/generate-pincode?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# generate-pincode

Node.js module for generating random pincodes.

## Installation

```sh
$ npm install generate-pincode
```
## Usage

```javascript
var gpc = require('generate-pincode')
var pin = gpc(4)

console.log(pin)

// => 1234
```

## Related

- [generate-pincode-cli](https://github.com/zrrrzzt/generate-pincode-cli) CLI of this module


## License

[MIT](LICENSE)

![Robohash image of generate-pincode](https://robots.kebabstudios.party/generate-pincode.png "Robohash image of generate-pincode")