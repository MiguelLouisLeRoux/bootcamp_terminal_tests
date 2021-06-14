let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('The isWeekDay function', function(){
    
    it('Should return true if week day', function(){
        
        assert.equal(true, isWeekday('Monday'));
    });

    it('Should return false if not a week day', function(){
        
        assert.equal(false, isWeekday('Saturday'));
    });

});