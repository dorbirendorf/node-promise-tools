
export  function race(iterable){
    return new Promise((resolve,reject)=>{
        iterable.forEach(item=>{   
            if(item instanceof Promise){
                item.then(resolve)
            }else{
                resolve(item)
            }
        })
    })
}