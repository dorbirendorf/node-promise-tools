export  function some(iterable,n){
    return new Promise((resolve,reject)=>{
        const fulfilledArr=[]
        iterable.forEach(item=>{   
            if(item instanceof Promise){
                item.then((fulfilled)=>{
                    fulfilledArr.push(fulfilled)
                    if(fulfilledArr.length===n){resolve(fulfilledArr)}
                })
            }
        })
    })
}