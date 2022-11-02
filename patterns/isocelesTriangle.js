//                     * 
//                   * * * 
//                 * * * * * 
//               * * * * * * * 
//             * * * * * * * * * 
//           * * * * * * * * * * * 
//         * * * * * * * * * * * * * 
//       * * * * * * * * * * * * * * * 
//      * * * * * * * * * * * * * * * * * 
//    * * * * * * * * * * * * * * * * * * * 


function pattern(n){
    let i = n;
    let output = "";
    while(i >= 0){
        let j = 0;
        while(j < n){
            if(j >= i){
                output += "* "
            }else{
                output += "  "
            }
            j++
        }
        let k = 1;
        while(k < n){
            if(k < n-i){
                output += "* "
            }
            k++
        }
        output += "\n"
        i--
        
    }
    return output;
}

console.log(pattern(10))