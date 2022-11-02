function pattern(n){
    let i = n;
    let output = "";
    while(i >= 0){
        let j = 0;
        let k = 1
        while(j < n){
            if(j >= i){
                output += k + " "
                k++
            }else{
                output += "  "
            }
            j++
        }
        output += "\n"
        i--
    }
    return output;
}

console.log(pattern(4))