export function delay(ms,val){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(val),ms)
    })
}