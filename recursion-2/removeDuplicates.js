function removeDuplicates(string){
    if(string.length == 0){
        return string
    }

    if(string[0] === string[1]){
        return removeDuplicates(string.slice(1, string.length))
    }else{
        return string[0] + removeDuplicates(string.slice(1, string.length))
    }
}

console.log(removeDuplicates("abbccdd"))