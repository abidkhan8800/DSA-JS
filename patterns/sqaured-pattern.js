let num = 5;
let k =0 , j =0;
let result = ""
let l = 1
let output = ""
for(let i = 0; i< num; i++){
    for(let j = 0; j < num; j++){
        output += l + " "
        l++
    }

    output += "\n"
}
console.log(output)