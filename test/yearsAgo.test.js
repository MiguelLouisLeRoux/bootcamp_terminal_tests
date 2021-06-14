let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){
    
    it('Should return the number of years ago', function(){
        
        assert.equal(45, yearsAgo(1976));
    });

    it('Should return the number of years ago', function(){
        
        assert.equal(21, yearsAgo(2000));
    });

});