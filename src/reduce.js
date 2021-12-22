export async function reduce(iterable,cb,init){

    const result = await iterable.reduce(async(acc,curr)=>{
        const newAcc = await acc
        const newCurr= await curr

        const res = await cb(newAcc,newCurr)
        return res
        
    },init)

    return result
}