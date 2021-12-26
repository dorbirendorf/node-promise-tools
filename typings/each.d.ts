import { PromiseIterable } from "./types.js";
export declare function each(iterable: PromiseIterable, cb: (input: any) => void): Promise<Iterable<any>>;
