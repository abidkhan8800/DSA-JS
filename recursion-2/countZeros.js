function zeros(n){
    if(n == 0){
        return 0
    }
    if(n%10 != 0){
        return zeros(Math.floor(n/10))
    }else{
        return 1 + zeros(Math.floor(n/10))
    }
}


console.log(zeros(01))