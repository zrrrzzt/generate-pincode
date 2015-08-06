'use strict'

var tap = require('tap')
var gpc = require('../index')

tap.throws(
  function () {
    gpc()
  },
  {message: 'Missing required param: pinLength'},
  'Throws if length number is not supplied'
)

tap.throws(
  function () {
    gpc(8.9)
  },
  {message: 'pinLength is not a whole number'},
  'Should require pincodeLength to be a whole number'
)
