import { props } from "../src/props";
import { describe } from "mocha";
import { expect } from "chai";
import { createNPromisesObj } from "./utils";

describe("the 'props' module", () => {
    context("props", () => {
        let promises: { [key: string]: Promise<string> };
        let Mixed:{ [key: string]: any};
        beforeEach(() => {
            promises = createNPromisesObj(150, 3);
            Mixed = {"3":"3",...promises};
        });
        
        it("should be a function", () => {
            expect(props).to.be.a("Function");
        });
        it("return array of values for array of promises", async () => {
            const result = await props(promises);
            expect(result).to.eql({ "0": "0", "1": "1", "2": "2" });
        });
        it("return array of values for array of promises and values", async () => {
            
            const result = await props(Mixed);
            expect(result).to.eql({ "0": "0", "1": "1", "2": "2","3": "3" });
        });
    });
});
