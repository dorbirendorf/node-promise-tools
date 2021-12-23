//--------------------------------------------------
import { PromiseIterable } from "./types.js";

export async function mapParallel(
    iterable: PromiseIterable,
    cb: (input: any) => Promise<any>
): Promise<Iterable<any>> {
    const results = [];
    iterable = await iterable;
    const pending = Array.from(iterable, (item) => cb(item));
    for (const p of pending) {
        results.push(await p);
    }
    return results;
}

//--------------------------------------------------

export async function mapSeries(
    iterable: PromiseIterable,
    cb: (input: any) => Promise<any>
): Promise<Iterable<any>> {
    const results = [];
    iterable = await iterable;
    for (const item of iterable) {
        results.push(await cb(item));
    }
    return typeof iterable === "string" ? results.join("") : results;
}

//--------------------------------------------------
