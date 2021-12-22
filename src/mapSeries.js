export async function mapSeries(iterator,cb){
    let resolved=[]
    for(let i=0;i<iterator.length;i++){
        resolved.push(await cb(await(iterator[i])))
    }
    return resolved
    
}