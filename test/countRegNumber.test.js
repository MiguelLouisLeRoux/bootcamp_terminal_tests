let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){
    
    it('Should return the number of registration numbers in given string', function(){
        
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it('Should return the number of registration numbers in given string', function(){
        
        assert.equal(2, countRegNumber('CA 42665,AA 12 RT GP'));
    });

});