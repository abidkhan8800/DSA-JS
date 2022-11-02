function pattern(n){
    let i = n;
    let output = "";
    while(i >= 0){
        let j = 0;
        while(j < i){
            output +=   j+1 + " " ;
            j++
        }
        output += "\n"
        i--
    }
    return output;
}

console.log(pattern(7))