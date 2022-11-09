function sumArray(arr){
    if(arr.length === 1){
        return arr[0]
    }

    return arr[0] + sumArray(arr.slice(1, arr.length))
}


console.log(sumArray([1,2,3,4,5]))

function sumArray2(arr, index){
    if(index === arr.length - 1){
        return arr[index]
    }

    return arr[index] + sumArray2(arr, index + 1)
}

console.log(sumArray2([1,2,3,4,5], 0))