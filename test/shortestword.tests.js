import assert from 'assert';

import shortestWord from '../shortestword.js';
describe('Test for the Word game(shortest word) function' , function(){
    
    it("It should return the shortest word in a sentence ,'the'" , function(){
        
        assert.equal("the",shortestWord("The dog jumped over the shipyard fence"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the shortest word in a sentence ,'up'" , function(){
        
        assert.equal("up",shortestWord("The dog barked loudly at the cat up the tree"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    
    


});
// console.log(greet('Hlanganani'))