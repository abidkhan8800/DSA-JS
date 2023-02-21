/**
 * 
 * @param {String} str 
 * @returns {String}
 */
function compressString(str){
    let count = 1
    let newString = ""
    for(let i = 0; i < str.length; i++){
        if(str[i] == str[i+1]){
            count++
        }
        else if(str[i] != str[i+1] && count > 1){
            newString += str[i] + count
            count = 1
        }
        else{
            newString += str[i]
        }

    }
    return newString

}

console.log(compressString("aannfbbaabbbcc"))