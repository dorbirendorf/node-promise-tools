//--------------------------------------------------
import { PromiseIterable } from "./types.js";

export async function filterSeries(
    iterable: PromiseIterable,
    cb: (input: any) => Promise<boolean>
) {
    const results = [];
    iterable = await iterable;
    for (const item of iterable) {
        if ((await cb(item)) === true) results.push(item);
    }
    return typeof iterable === "string" ? results.join("") : results;
}

//--------------------------------------------------

export async function filterParallel(
    iterable: PromiseIterable|any,
    cb: (input: any) => Promise<boolean>
) {
    const results = [];
    iterable = await iterable;
    const pending = Array.from(iterable, (item) => cb(item));

    for (const [i, p] of pending.entries()) {
        if ((await p) === true) results.push(iterable[i]);
    }

    return typeof iterable === "string" ? results.join("") : results;
}

//--------------------------------------------------
