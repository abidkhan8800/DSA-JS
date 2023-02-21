/**
 * 
 * @param {String []} str 
 * @returns {String []}
 */
function reverseEachWord(str){
    let splitted = str.split(" ");

    let output = ""
    for(let item of splitted){
        output += item.split("").reverse().join("")
        output += " "

    }
    return output
}

console.log(reverseEachWord("Welcome to Coding Ninjas"));
console.log(reverseEachWord("Always indent your code"));
