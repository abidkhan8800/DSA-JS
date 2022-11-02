function pattern(n){
    let i = 0;
    let output = "";
    while(i < n){
        let j = 0;
        while(j <= i){
            output = output +  "*" + " " ;
            j++
        }
        output = output + "\n"
        i++
    }
    return output;
}

console.log(pattern(7))