import { mapParallel,mapSeries } from "../src/map";
import { describe } from "mocha";
import { expect } from "chai";
import { createNPromisesArr } from "./utils";

describe("the 'map' module", () => {
    let promises: Promise<string>[];
    let Mixed:any[];
    beforeEach(() => {
        promises = createNPromisesArr(150, 3);
        Mixed = ["3",...promises];
    });

    context("mapParallel", () => {

        it("should be a function", () => {
            expect(mapParallel).to.be.a("Function");
        });

        it("return array of values for array of promises", async () => {
            const result = await mapParallel(promises,async(item)=>"m"+(await item));
            expect(result).to.eql(["m2", "m1", "m0"]);
        });

        it("return array of values for array of promises and values", async () => {
            const result = await mapParallel(Mixed,async(item)=>"m"+(await item));
            expect(result).to.eql(["m3", "m2", "m1", "m0"]);
        });
    });

    context("mapSeries", () => {
        
        it("should be a function", () => {
            expect(mapSeries).to.be.a("Function");
        });

        it("return array of values for array of promises", async () => {
            const result = await mapSeries(promises,async(item)=>"m"+(await item));
            expect(result).to.eql(["m2", "m1", "m0"]);
        });

        it("return array of values for array of promises and values", async () => {
            const result = await mapSeries(Mixed,async(item)=>"m"+(await item));
            expect(result).to.eql(["m3", "m2", "m1", "m0"]);
        });
    });
});
