'use strict'

module.exports = function generatePincode (pinLength) {

  var pinCodeArray = []

  if (!pinLength) {
    throw new Error('Missing required param: pinLength')
  }

  if (pinLength !== parseInt(pinLength, 10) || parseInt(pinLength, 10) < 0) {
    throw new Error('pinLength is not a whole number')
  }

  for (var i = 0; i < pinLength; i++) {
    pinCodeArray.push(Math.floor(Math.random() * 10))
  }

  return pinCodeArray.join('')

}
