function pattern(n){
    let i = 0;
    let output = "";
    while(i < n){
        let j = 0;
        while(j <= i){
            if(j == 0 || j == i){
                output +=   1 + " " ;
            }else{
                output +=   2 + " " ;
            }
            
            j++
        }
        output += "\n"
        i++
    }
    return output;
}

console.log(pattern(7))