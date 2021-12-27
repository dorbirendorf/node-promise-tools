import { PromiseIterable } from "./types.js";
export declare function filterSeries(iterable: PromiseIterable, cb: (input: any) => Promise<boolean>): Promise<string | any[]>;
export declare function filterParallel(iterable: PromiseIterable | any, cb: (input: any) => Promise<boolean>): Promise<string | any[]>;
