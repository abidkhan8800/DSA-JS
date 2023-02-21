function highestOcurringCharacter(str){
    let obj = {};
    let char;
    let max = 0
    for(let i = 0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] += 1
        }else{
            obj[str[i]] = 1
        }
    }

    for(let key in obj){

        if(obj[key] > max){
            char = key
            max = obj[key]
        }
    }

    return char
}


console.log(highestOcurringCharacter("abcdeapapqarr"))