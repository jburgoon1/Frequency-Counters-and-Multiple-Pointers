// add whatever parameters you deem necessary

function constructNote(msg, letters) {
    if(msg.length==0)return true
    if(letters.length==0)return false 
     
const msgCount = countLetters(msg)
const letterCount = countLetters(letters)


for(msgKey in msgCount){
    for(letKey in letterCount){
        if(msgKey === letKey){
            if(msgCount[msgKey]<=letterCount[letKey]){
                 
                delete msgCount[msgKey]
                if(Object.keys(msgCount).length==0)return true
                              
            }else{
                return false
            }
        }
    }
    
}



}

function countLetters(data){
const count = {};

for(let i=0; i < data.length; i++){
count[data[i]] = count[data[i]]+1||1
}

return count
}