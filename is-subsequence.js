// add whatever parameters you deem necessary
function isSubsequence(str,msg) {
    if (str == msg) {
        return true;
    }
    
    let j = 0;
    
    for (let i = 0; i <msg.length; i++) {
        if (str[j] === msg[i]) {
            j++;
        }
    }
    
    return j === str.length;
};

