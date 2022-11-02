function pattern(n){
    let i = 0;
    let output = "";
    while(i < n){
        let j = 0;
        while(j <= i){
            if(i < 2){
                output +=   1 + " " ;
            }else if(j == 0 || j == i){
                output +=   i + " " ;
            }else{
                output +=   0 + " " ;
            }
            
            j++
        }
        output += "\n"
        i++
    }
    return output;
}

console.log(pattern(7))