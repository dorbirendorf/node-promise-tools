export async function filterParallel(arr, filterFunc){
    let ans = []
    let resArr = arr.map(async (item) => {
        let itemWait = await item;
        return filterFunc(itemWait);
    });
    for (const [i,result] of resArr.entries()) {
        let condition = await result
        if(condition) {
            ans.push(arr[i])
        }
    }
    return await Promise.all(ans)
}