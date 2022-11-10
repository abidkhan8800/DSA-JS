function stairCase(n){
    if(n <= 1){
        return 1
    }else if( n == 2){
        return 2
    }else{
        return stairCase(n-3) + stairCase(n-2) +stairCase(n-1)
    }

}

console.log(stairCase(4))