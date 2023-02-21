/**
 * 
 * @param {String []} str 
 * @param {String} c 
 * @returns {String []}
 */
function removeCharacter(str, c){
    let newStr = "";
    for(let s of str){
        if(s != c){
            newStr += s
        }
    }
    return newStr;
}

console.log(removeCharacter("aabccbaa", "a"))
console.log(removeCharacter("xxyyzxx", "y"))