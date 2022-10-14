const stack = require('./stacks-arrays');

let n = 8;

while(n){
    r = n%2
    n = Math.floor(n/2)
    stack.push(r)
}

let binaryString = "";

while(!stack.isEmpty()){
    binaryString += stack.pop().toString();
}

console.log(binaryString)