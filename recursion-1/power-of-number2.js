function power(x, n){
    if(n==0){
        return 1
    }
    let smallOutput = power(x, Math.floor(n/2))
    if(n%2 == 0){
        return smallOutput * smallOutput
    }else{
        return x * smallOutput * smallOutput
    }
}


console.log(power(2,8))