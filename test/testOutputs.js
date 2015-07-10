'use strict';

var tap = require('tap');
var gpc = require('../index');

tap.equal(gpc(6).length, 6, 'Should return a pincode with the requested length');