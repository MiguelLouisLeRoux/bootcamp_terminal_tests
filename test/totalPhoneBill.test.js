let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('The totalPhoneBill function', function(){
    
    it('Should return the total phone bill', function(){
        
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('Should return the total phone bill', function(){
        
        assert.equal('R10.85', totalPhoneBill('call, sms, call, sms, sms, sms, call'));
    });

});