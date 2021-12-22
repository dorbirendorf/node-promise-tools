export async function each(iterable,cb){
    try{
        const len=iterable.length;
        for(let i=0;i<len;i++){
            await cb(iterable[i],i,len)
        }
        
    }catch(e){
        console.log('inside catch',e)
        throw(e)
    }
}