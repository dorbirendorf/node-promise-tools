import { PromiseIterable } from "./types.js";
export async function reduce(iterable:any[]|Promise<any[]>, cb:(acc:any,input:any)=>any, initial:any):Promise<any>{
    iterable=await iterable
    let aggregator = initial || iterable[0];

    for (const item of iterable) {
        aggregator = await cb(aggregator,item);
    }
    
    return aggregator
}

