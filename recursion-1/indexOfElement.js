function firstIndexOfElement(arr,num, index){
    if(index >= arr.length){
        return -1
    }
    if(arr[index] === num){
        return index
    }

    return firstIndexOfElement(arr, num, index + 1)
}

console.log(firstIndexOfElement([1,4,5,2,2,4,6], 4, 0))



function lastIndexOfElement(arr, num, index){
    if(index < 0){
        return -1;
    }
    if(arr[index] === num) {
        return index
    }

    return lastIndexOfElement(arr, num, index - 1)
}

console.log(lastIndexOfElement([1,4,5,2,2,4,6], 1, 6))