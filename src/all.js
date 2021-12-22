export async function all(promisesArr){
    try{
        let resolvedArr=[]
        for(let promise of promisesArr){
            resolvedArr.push(await promise)
        }
        return resolvedArr
    }catch(err){
        reject(err)
    }}