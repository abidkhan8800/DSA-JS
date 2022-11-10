function mul(m,n){
    if(n == 0){
        return 0
    }
    return m + mul(m, n - 1)
}


console.log(mul(8,3))