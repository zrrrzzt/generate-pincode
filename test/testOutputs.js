'use strict';

var gpc = require('../index')
  , assert = require('assert')
  ;

describe('generate-pincode - outputs', function(){

  it('Should return a pincode with the requested length', function(done){
    var pincodeLength = 6
      ;
    gpc(pincodeLength, function(err, pincode){
      assert.equal(pincode.length, 6);
      done();
    });
  });

});