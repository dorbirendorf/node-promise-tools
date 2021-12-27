import { all } from "../src/all";
import { describe } from "mocha";
import { expect } from "chai";
import { createNPromisesArr } from "./utils";

describe("the 'all' module", () => {
    context("all", () => {
        let promises: Promise<string>[];
        let Mixed: any[];
        beforeEach(() => {
            promises = createNPromisesArr(150, 3);
            Mixed = ["3", ...promises];
        });


        it("should be a function", () => {
            expect(all).to.be.a("Function");
        });

        it("return array of values for array of promises", async () => {
            const result = await all(promises);
            expect(result).to.eql(["2", "1", "0"]);
        });

        it("return array of values for array of promises and values", async () => {
            const result = await all(Mixed);
            expect(result).to.eql(["3", "2", "1", "0"]);
        });
    });
});
