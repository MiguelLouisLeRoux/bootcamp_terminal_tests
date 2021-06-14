let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){
    
    it('Should return true if location indicator refers to registration number', function(){
        
        assert.equal(true, regCheck('DC 55 YU GP', 'GP'));
    });

    it('Should return false if location indicator does not refer to registration number', function(){
        
        assert.equal(false, regCheck('DC 55 YU CA', 'GP'));
    });

});