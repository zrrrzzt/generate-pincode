'use strict'

const tap = require('tap')
const gpc = require('../index')

tap.equal(
  gpc(6).length, 6,
  'Should return a pincode with the requested length'
)
