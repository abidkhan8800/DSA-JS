function pattern(n){
    let i = 0;
    let k = 65;
    let output = "";
    while(i < n){
        let j = 0;
        while(j <= i){
            output = output +  String.fromCharCode(k) + " " ;
            j++;
        }
        output = output + "\n"
        i++
        k++
    }
    return output;
}

console.log(pattern(5))