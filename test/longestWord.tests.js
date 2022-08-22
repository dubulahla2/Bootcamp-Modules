import assert from 'assert';
import longestWord from '../longestWord.js';



// console.log(greet("hlananani"));
describe('Test for the Word game(longest word) function' , function(){
    it("It should return the longest word in a sentence ,'shipyard'" , function(){
        
        assert.equal("shipyard",longestWord("The dog jumped over the shipyard fence"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return the longest word in a sentence ,'barked'" , function(){
        
        assert.equal("barked",longestWord("The yellow dog barked loud"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    

});
// console.log(greet('Hlanganani'))