import assert from 'assert';
import countAllFromTown from '../countAllFromTown.js';


// console.log(greet("hlananani"));
describe('Test for countAllFromTown function' , function(){
    it("It should return a 3 for ,'CL''-fromStellies" , function(){
        
        assert.equal("3",countAllFromTown("CL 124,CY 567,CL 345, CJ 456,CL 341","CL"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    it("It should return a 1 for ,'CF''-Kuilsriver'" , function(){
        
        assert.equal("1",countAllFromTown("CJ 124,CY 567,CL 345, CF 456, CL 341","CF"),"this should be true"); 

        // assert.deepEqual([2,2],[2,2]);
    });
    // it("It should return a total of R1.30 for ,'sms, sms'" , function(){
        
    //     assert.equal("R1.30",totalPhoneBill("sms, sms"),"this should be true"); 

    //     // assert.deepEqual([2,2],[2,2]);
    // });

});
// console.log(greet('Hlanganani'))