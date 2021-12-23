export async function all(
    promises: Iterable<any> | Promise<Iterable<any>>
): Promise<Array<any>> {
    const results = [];
    promises = await promises;
    for (const p of promises) {
        results.push(await p);
    }
    return results;
}
