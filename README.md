#generate-pincode [![Build Status](https://travis-ci.org/zrrrzzt/generate-pincode.svg?branch=master)](https://travis-ci.org/zrrrzzt/generate-pincode)

Node.js module/CLI app for generating pincodes.

##Installation

```
$ npm install generate-pincode
```

Install it globally to use the CLI version

```
$ npm install generate-pincode -g
```

##Usage - module

```
var gpc = require('generate-pincode')
  ;

gpc(4, function(err, pincode){

  if(err){
    console.error(err);
  } else {
    console.log(pincode);
  }

});
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