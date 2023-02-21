/**
 * 
 * @param {String []} str 
 * @returns {String []}
 */
function removeConsecutiveCharacters(str){
    let newStr = str[0];

    for(let i = 1; i < str.length - 1; i++){
        if(str[i] != str[i+1]){
            newStr += str[i+1]
        }
    }
    return newStr;
}



console.log(removeConsecutiveCharacters("aabccbaa"))
console.log(removeConsecutiveCharacters("xxyyzxx"))