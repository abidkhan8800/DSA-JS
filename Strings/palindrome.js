/**
 * 
 * @param {string[]} str 
 * @returns {boolean}
 */

function isPalindrome(str){
    for(let i = 0; i < str.length / 2; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false
        }
    }

    return true
}


console.log(isPalindrome("aba"))
console.log(isPalindrome("abaa"))

