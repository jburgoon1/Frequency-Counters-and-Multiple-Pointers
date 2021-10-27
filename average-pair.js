// add whatever parameters you deem necessary
function averagePair(arr, target) {
    let first = 0
    let last = arr.length -1
    while(last > first){
    if((arr[first]+arr[last])/2 > target){
        last--
    }
    if((arr[first]+arr[last])/2 < target){
        first++
    }
    if((arr[first]+arr[last])/2 == target){
        return true
    }
}
return false
}
