import { PromiseIterable } from "./types.js";
export declare function mapParallel(iterable: PromiseIterable, cb: (input: any) => Promise<any>): Promise<Iterable<any>>;
export declare function mapSeries(iterable: PromiseIterable, cb: (input: any) => Promise<any>): Promise<Iterable<any>>;
