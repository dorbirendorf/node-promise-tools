import { PromiseIterable } from "./types.js";
export declare function filterSeries(iterable: PromiseIterable, cb: (input: any) => boolean): Promise<string | any[]>;
export declare function filterParallel(iterable: Promise<any>[] | Promise<Promise<any>[]>, cb: (input: any) => boolean): Promise<string | Promise<any>[]>;
