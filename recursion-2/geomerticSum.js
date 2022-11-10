function geoSum(n){
    if(n<=0){
        return 1
    }
    let value = 1 / (Math.pow(2, n));
    return value + geoSum(n-1)
}

console.log(geoSum(3).toFixed(5))