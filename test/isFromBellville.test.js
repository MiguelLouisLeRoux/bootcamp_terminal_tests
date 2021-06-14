let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){
    
    it('Should return true if registrationNo starts with CY', function(){
        
        assert.equal(true, isFromBellville('CY 123'));
    });

    it('Should return flase if registrationNo does not starts with CY', function(){
        
        assert.equal(false, isFromBellville('CA 123'));
    });

});