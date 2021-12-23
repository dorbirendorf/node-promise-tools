import { IPropsInput, IPropsOutput } from "./types.js";

export async function props(
    promisesObj: IPropsInput | Promise<IPropsInput>
): Promise<IPropsOutput> {
    const results: IPropsOutput = {};
    promisesObj = await promisesObj;

    for (const key in promisesObj) {
        results[key] = await promisesObj[key];
    }
    return results;
}
