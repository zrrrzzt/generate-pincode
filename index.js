'use strict'

const shuffle = require('knuth-shuffle').knuthShuffle

module.exports = function (pinLength) {
  var pinCodeArray = []
  const seed = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  if (!pinLength) {
    throw new Error('Missing required param: pinLength')
  }

  if (pinLength !== parseInt(pinLength, 10) || parseInt(pinLength, 10) < 0) {
    throw new Error('pinLength is not a whole number')
  }

  for (var i = 0; i < pinLength; i++) {
    const random = shuffle(seed.slice(0))
    pinCodeArray.push(random[0])
  }

  return pinCodeArray.join('')
}
