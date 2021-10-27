// add whatever parameters you deem necessary
function countPairs(arr, total) {
    if(arr.length == 0) return 0
    let count = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<=arr.length;j++){
            if((arr[i]+arr[j])==total){
                count++
            }
        }
    }
    return count
}
