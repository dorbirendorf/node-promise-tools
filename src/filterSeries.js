export async function filterSeries(arr, filterFunc){
    let ans=[]
    
    for(let [i,item] of arr.entries()){
        const itemWait=await item
        const condition=await filterFunc(itemWait)
        if(condition){
            ans.push(arr[i])
        }
    }
    return Promise.all(ans)
}