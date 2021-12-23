import log from "@ajar/marker";

export const delay = (ms: number): Promise<any> =>
    new Promise((resolve) => setTimeout(resolve, ms));

//--------------------------------------------------

// export const echo = async (msg, ms) => {
//   await delay(ms);
//   return msg;
// };

//--------------------------------------------------

export const echo = async (msg:string, ms:number):Promise<string> => {
    log.yellow(`--> start ${msg}`);
    await delay(ms);
    log.blue(`finish <-- ${msg}`);
    return msg;
};

//--------------------------------------------------

export const random = (max:number, min = 0):number =>
    min + Math.round(Math.random() * (max - min));
