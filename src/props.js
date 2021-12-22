export async function props(promisesObs){
    try{
        let resolvedObj={}
        for(let [key,promise] of Object.entries(promisesObs)){
            const resolved = await promise
            resolvedObj[key]=(resolved)
        }
        return resolvedObj
    }catch(err){
        throw(err)
    }
}