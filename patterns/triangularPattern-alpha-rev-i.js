function pattern(n){
    let i = 0;
    let output = "";
    while(i < n){
        let j = 0;
        let k = 65 + n - (i+1);
        while(j <= i){
            output = output +  String.fromCharCode(k + j) + " " ;
            j++;
        }
        output = output + "\n"
        i++
    }
    return output;
}

console.log(pattern(26))