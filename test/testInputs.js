'use strict';

var gpc = require('../index')
  , assert = require('assert')
  ;

describe('generate-pincode - inputs', function(){

  it('Should require pincodeLength', function(done){
    var pincodeLength = false
      ;
    gpc(pincodeLength, function(err, pincode){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /Missing required param: pinLength/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

  it('Should require pincodeLength to be a whole number', function(done){
    var pincodeLength = 8.9
      ;
    gpc(pincodeLength, function(err, pincode){
      assert.throws(function(){
          if(err) throw err;
        }, function(err){
          if((err instanceof Error) && /pinLength is not a whole number/.test(err)){
            return true
          }
        },
        "Unexpected error"
      );
      done();
    });
  });

});