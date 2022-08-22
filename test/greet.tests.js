import assert from 'assert';
import greet from '../greet.js'
import chalk from 'chalk';

const styledMessage = chalk.bgGreen.black(greet('Test my greet function'));

// console.log(greet("hlananani"));
describe(styledMessage , function(){
    it("It should return ,'Hello,Hlanganani'when called with 'Hlanganani'" , function(){
        
        assert.equal("Hello, Hlanganani",greet("Hlanganani"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return ,'Hello,Sizwe'when called with 'Sizwe'" , function(){
        
        assert.equal("Hello, Sizwe",greet("Sizwe"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });1

});
// console.log(greet('Hlanganani'))
// var functionToTest = require('../greet.js);