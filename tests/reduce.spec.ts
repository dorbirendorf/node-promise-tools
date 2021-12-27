import { reduce } from "../src/reduce";
import { describe } from "mocha";
import { expect } from "chai";
import { createNPromisesArr } from "./utils";

describe("the 'reduce' module", () => {
    context("reduce", () => {
        let promises: Promise<string>[];
        let Mixed: any[];
        beforeEach(() => {
            promises = createNPromisesArr(150, 3);
            Mixed = ["3", ...promises];
        });


        it("should be a function", () => {
            expect(reduce).to.be.a("Function");
        });

        it("return one value array of promises", async () => {
            const result = await reduce(promises,async (acc,item)=> parseInt(await item)*acc,1);
            expect(result).to.eql(3);
        });

        it("return one value array of promises and values", async () => {
            const result = await reduce(Mixed,async(acc,item)=> parseInt(await item)*acc,1);
            expect(result).to.eql(6);
        });
    });
});
