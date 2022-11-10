function towerOfHanoi(n, src, aux, dest){
    if(n == 0){
        return
    }
    if(n == 1){
        console.log(src+" "+dest)
        return
    }

    towerOfHanoi(n-1, src, dest, aux)
    console.log(src+" "+dest);
    towerOfHanoi(n-1, aux, src, dest)
}

towerOfHanoi(4, 'a', 'b', 'c')