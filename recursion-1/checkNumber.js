function checkNumber(arr, num){
    if(arr.length === 0){
        return false
    }
    if(arr[0] == num){
        return true
    }

    return checkNumber(arr.slice(1, arr.length), num);
}

console.log(checkNumber([1,2,3,4,5], 5))

function checkNumber2(arr, num, index){
    if(index >= arr.length){
        return false
    }

    if(arr[index] === num){
        return true
    }

    return checkNumber2(arr, num, index + 1)
}

console.log(checkNumber2([1,2,3,4,5], 5, 0))

