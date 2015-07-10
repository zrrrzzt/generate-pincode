#!/usr/bin/env node
'use strict';

var gpc = require('./index')
  , pkg = require('./package.json')
  , pincodeLength = process.argv[2] || 4
  ;

function printHelp() {
  console.log(pkg.description);
  console.log('');
  console.log('Usage:');
  console.log('  $ generate-pincode');
  console.log('Optional, pass in length');
  console.log('  $ generate-pincode <length>');
}

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp();
  return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

console.log(gpc(parseInt(pincodeLength, 10)));