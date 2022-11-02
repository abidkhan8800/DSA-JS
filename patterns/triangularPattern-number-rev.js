function pattern(n){
    let i = 0;
    let output = "";
    
    while(i < n){
        let j = i;
        while(j >= 0){
            output +=  (j + 1) + " " ;
            j--
        }
        output += "\n"
        i++
    }
    return output;
}

console.log(pattern(7))