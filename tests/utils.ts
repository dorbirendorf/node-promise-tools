import { silentEcho } from "../src/utils";

export function createNPromisesArr(time: number, N: number) {
    const promises: Promise<string>[] = [];
    while (N--) {
        const p = silentEcho(N.toString(), time);
        promises.push(p);
    }
    return promises;
}


export function createNPromisesObj(time: number, N: number) {
    const promises: {[key:string]:Promise<string>} = {};
    while (N--) {
        const p = silentEcho(N.toString(), time);
        promises[N.toString()]=p;
    }
    return promises;
}