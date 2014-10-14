'use strict';

module.exports = function generatePincode(pinLength, callback){

  var pinCodeArray = []
    ;

  if(!pinLength){
    return callback(new Error('Missing required param: pinLength'), null);
  }

  if(pinLength !== parseInt(pinLength, 10) || parseInt(pinLength, 10) < 0){
    return callback(new Error('pinLength is not a whole number'), null);
  }

  for(var i=0; i < pinLength; i++){
    pinCodeArray.push(Math.floor(Math.random() * 10));
  }

  return callback(null, pinCodeArray.join(''));

}