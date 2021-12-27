import { each } from "../src/each";
import { describe } from "mocha";
import { expect } from "chai";
import { createNPromisesArr } from "./utils";

describe("the 'each' module", () => {
    context("each", () => {

        let promises: Promise<string>[];
        let Mixed:any[];
        beforeEach(() => {
            promises = createNPromisesArr(150, 3);
            Mixed = ["3",...promises];
        });
        it("should be a function", () => {
            expect(each).to.be.a("Function");
        });
        it("should do something for each item in  array of promises", async () => {
            const result:string[]=[];
            await each(promises,async(item)=>result.push(`i${await item}`));
            expect(result).to.eql(["i2", "i1", "i0"]);
        });

        it("should do something for each item array of pormise and values", async () => {
            const result:string[]=[]
            await each(["3",...promises],async(item)=>result.push(`i${await item}`));
            expect(result).to.eql(["i3","i2", "i1", "i0"]);
        });
    });
});
