let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function', function(){
    
    it('Should return transport fee for morning shift', function(){
        
        assert.equal('R20', transportFee('morning'));
    });

    it('Should return transport fee for afternoon shift', function(){
        
        assert.equal("R10", transportFee('afternoon'));
    });

    it('Should return transport fee for nightshift', function(){
        
        assert.equal("free", transportFee('nightshift'));
    });

});