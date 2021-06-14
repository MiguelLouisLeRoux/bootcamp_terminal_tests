let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){
    
    it('Should return the number of registration numbers of given town', function(){
        
        assert.equal(1, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CF'));
        
    });

    it('Should return the number of registration numbers of given town', function(){
        
        assert.equal(2, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341', 'CL'));
        
    });

});