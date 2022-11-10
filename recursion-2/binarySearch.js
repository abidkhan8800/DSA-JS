function binarySearch(arr, low, high, num){
    if(low>high){
        return false
    }
    mid = Math.floor((low + high) / 2)
    if(arr[mid] === num){
        return true
    }

    if(arr[mid] > num){
        return binarySearch(arr, low, mid - 1, num)
    }else{
        return binarySearch(arr, mid+1, high, num)
    }
}


console.log(binarySearch([1,2,3,4,5,6], 0, 6, 10))