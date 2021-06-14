let assert = require("assert");
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function(){
    
    it('Should return Bellville', function(){
        
        assert.equal('Bellville', fromWhere('CY'));
    });

    it('Should return Paarl', function(){
        
        assert.equal('Paarl', fromWhere('CJ'));
    });

    it('Should return Cape Town', function(){
        
        assert.equal('Cape Town', fromWhere('CA'));
    });

    it('Should return Some other place!', function(){
        
        assert.equal('Some other place!', fromWhere('CC'));
    });

});