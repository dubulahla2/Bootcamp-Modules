import assert from 'assert';
import isFromCapeTown from '../isFromCapeTown.js';


// console.log(greet("hlananani"));
describe('Test Vehicle registration numbers function for Cape Town' , function(){
    it("It should returns true if a registration number ,'starts with CA'" , function(){
        
        assert.equal(true,isFromCapeTown("CA 123 908"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should returns false if a registration number ,'does not start with CA'" , function(){
        
        assert.equal(false,isFromCapeTown("CJ 123 908"),"this should be false"); 

        // assert.deepEqual([2,2],[2,2]);
    });

});
// console.log(greet('Hlanganani'))