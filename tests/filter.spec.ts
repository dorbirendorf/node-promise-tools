import { filterSeries,filterParallel } from "../src/filter";
import { describe} from "mocha";
import { expect } from "chai";
import { createNPromisesArr } from "./utils";
import { resolve } from "path/posix";

describe("the 'filter' module", () => {
    let promises: Promise<string>[];
    let Mixed:any[];
    beforeEach(() => {
        promises = createNPromisesArr(150, 3);
        Mixed = ["3",...promises];
    });

    context("filterSeries", () => {

        it("should be a function", () => {
            expect(filterSeries).to.be.a("Function");
        });

        it("return filterd array of values for array of promises", async () => {
            const filterdPending = await filterSeries(promises, async (item)=> Number(await item)%2 === 0);
            const result = Promise.all(filterdPending);
            expect(await result).to.eql(["2","0"]);
        });

        it("return array of values for array of promises and values", async () => {
            const filterdPending = await filterSeries(Mixed, async (item)=> Number(await item)%2 === 0);
            const result = Promise.all(filterdPending);
            expect(await result).to.eql([ "2", "0"]);
        });

        it("return filtered string", async () => {
            const filterdPending = await filterSeries("bla123",async (char:string)=> isNaN(Number(char)) );
            expect(filterdPending).to.eql("bla");
        });
    });

    context("filterParallel", () => {

        it("should be a function", () => {
            expect(filterParallel).to.be.a("Function");
        });

        it("return filterd array of values for array of promises", async () => {
            const filterdPending = await filterParallel(promises, async (item)=> Number(await item)%2 === 0);
            const result = Promise.all(filterdPending);
            expect(await result).to.eql(["2","0"]);
        });

        it("return array of values for array of promises and values", async () => {
            const filterdPending = await filterParallel(Mixed, async (item)=> Number(await item)%2 === 0);
            const result = Promise.all(filterdPending);
            expect(await result).to.eql([ "2", "0"]);
        });
        it("return filtered string", async () => {
            const filterdPending = await filterParallel("bla123",async (char:string)=> isNaN(Number(char)) );
            expect(filterdPending).to.eql("bla");
        });
    });
});
