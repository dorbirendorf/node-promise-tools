import { race } from "../src/race";
import { describe } from "mocha";
import { expect } from "chai";
import { createNPromisesArr } from "./utils";

describe("the 'race' module", () => {
    context("race", () => {
        let promises: Promise<string>[];
        let Mixed:any[];
        beforeEach(() => {
        promises = createNPromisesArr(150, 3);
        Mixed = ["3",...promises];
    });

        it("should be a function", () => {
            expect(race).to.be.a("Function");
        });
        
        it("return array of values for array of promises", async () => {
            const result = await race(promises);
            expect(result).to.eql("2");
        });

        it("return array of values for array of promises and values", async () => {
            const result = await race(["3", ...promises]);
            expect(result).to.eql("3");
        });
    });
});
