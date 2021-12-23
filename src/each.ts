import { PromiseIterable } from "./types.js";

export async function each(
    iterable: PromiseIterable,
    cb: (input: any) => void
): Promise<Iterable<any>> {
    iterable = await iterable;
    for (const item of iterable) {
        await cb(item);
    }
    return iterable;
}
