// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if(num1.length !== num2.length) return false
    let num1Count = countLetters(num1)
    let num2Count = countLetters(num2)
    for(num1Key in num1Count){
        for(num2Key in num2Count){
            if(num1Key===num2Key){
                if(num1Count[num1Key]==num2Count[num2Key]){
                    delete num1Count[num1Key]
                    console.log(num1Count)
                    if(Object.keys(num1Count).length==0)return true
        
                }
            }
        }
    }
    return false
}
function countLetters(data){
    const count = {};
    let newData = String(data)
    for(let i=0; i < newData.length; i++){
    count[newData[i]] = count[newData[i]]+1||1
    }
    
    return count
    }