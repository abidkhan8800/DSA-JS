function permutation1(str1, str2){
    if(str1.length != str2.length) return false;
    let arr = new Array(256).fill(0);
    for(let i = 0; i < str1.length; i++){
        arr[str1.charCodeAt(i)] += 1
    }

    for(let i = 0; i < str2.length; i++){
        arr[str2.charCodeAt(i)] -= 1
    }

    if(Math.max(...arr) != 0){
        return false
    }else {
        return true
    }
}

console.log(permutation1("aaacbbb","aaaabbb"))