function power(a, x=0) {
    if(x === 0){
        return 1
    }

    return a * power(a, x-1)
}


// console.log(power(2,3))

function printNumbers(n){
    if(n===0){
        return;
    }
    printNumbers(n-1)
    console.log(n);
}
// printNumbers(5)

function fibbonaciNumber(n){
    if(n === 1 || n === 2) {
        return 1;
    }
    return fibbonaciNumber(n - 1) + fibbonaciNumber(n - 2);
}

console.log(fibbonaciNumber(8))