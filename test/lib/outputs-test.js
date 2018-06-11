const tap = require('tap')
const gpc = require('../../index')

tap.equal(
  gpc(6).length, 6,
  'Should return a pincode with the requested length (6)'
)

tap.equal(
  gpc(4).length, 4,
  'Should return a pincode with the requested length (4)'
)

tap.notEqual(
  gpc(4), gpc(4),
  'Should return different pincodes with the requested length (4)'
)
