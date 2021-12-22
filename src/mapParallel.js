import {all} from './all.js'
export async function mapParallel(iterator,cb){
    iterator = await iterator
    let resolved = iterator.map(async item=>{
        return  cb(await item)

    })
    return await all(resolved)
    
}