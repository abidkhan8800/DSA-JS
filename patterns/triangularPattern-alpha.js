function pattern(n){
    let i = 0;
    let k = 65;
    let output = "";
    while(i < n){
        let j = 0;
        while(j <= i){
            output = output +  String.fromCharCode(k) + " " ;
            j++;
            k++
        }
        output = output + "\n"
        i++
    }
    return output;
}

console.log(pattern(5))