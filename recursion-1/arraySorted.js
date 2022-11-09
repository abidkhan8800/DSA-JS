function isArraySorted(arr){
    if(arr.length == 1){
        return true
    }
    if(arr[0] > arr[1]){
        return false
    }

    return isArraySorted(arr.slice(1, arr.length))
}

console.log(isArraySorted([1,2,3,3,5,6]))


function isArraySorted2(arr, index){
    if(index === arr.length - 1){
        return true
    }
    if(arr[index] > arr[index + 1]){
        return false
    }

    return isArraySorted2(arr, index + 1)
}

console.log(isArraySorted2([1,2,3,3,5,6],0))