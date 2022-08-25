import assert from 'assert';
import fromWhere from '../fromWhere.js';


// console.log(greet("hlananani"));
describe('Test for fromhere function' , function(){
    // it("It should return a Bellville for ,'CY'" , function(){
        
    //     assert.equal("Bellville",fromWhere("CY"),"this should be true"); 

    //     // assert.deepEqual([2,2],[2,2]);
    // });
    it("It should return a Paarl for ,'CJ'" , function(){
        
        assert.equal("Paarl",fromWhere("CJ"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a Cape Town for ,'CA'" , function(){
        
        assert.equal("Cape Town",fromWhere("CA"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ',Some other place!' for ,'CC'" , function(){
        
        assert.equal("Some other place!",fromWhere("CC"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
   

});
// console.log(greet('Hlanganani'))