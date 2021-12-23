import PromiseIterable from "./types.js";
//--------------------------------------------------
// Doesn't work!
// export async function race(promises) {
//     const results = [];
//     for (const p of promises) {
//         results.push(await p);
//     }
//     //   promises.forEach(async p => {
//     //     results.push(await p);
//     //   });

//     return await results[0];
// }
//--------------------------------------------------
// you have to use the Promise object
export async function race(promises: PromiseIterable): Promise<any> {
    promises = await promises;
    return await new Promise((resolve) => {
        promises.forEach(async (p: Promise<any>) => {
            resolve(await p);
        });
    });
}
//--------------------------------------------------
// same here - you have to use the Promise object
export async function some(
    promises: PromiseIterable,
    num: number
): Promise<Iterable<any>> {
    promises = await promises;
    const results: any[] = [];
    return await new Promise((resolve) => {
        promises.forEach(async (p: Promise<any>) => {
            results.push(await p);
            if (results.length === num) resolve(results);
        });
    });
}
