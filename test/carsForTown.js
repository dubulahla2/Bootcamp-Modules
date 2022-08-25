import assert from "assert";
import carsForTown from "../carsForTown.js";

describe('Test for carsForT function', () =>{
    it("it should return an list containing cars from 'Stellenbosch '", () => {
        assert(carsForTown('Stellenbosch '));
    });
})

