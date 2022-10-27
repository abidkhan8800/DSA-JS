function combineSortedArrays(arrOne, arrTwo){
    let arrOneIndex = 0, arrTwoIndex = 0, mergeArrIndex = 0, mergedArray = [];


    while(arrOneIndex < arrOne.length && arrTwoIndex < arrTwo.length){
        if(arrOne[arrOneIndex] <= arrTwo[arrTwoIndex]){
            mergedArray[mergeArrIndex] = arrOne[arrOneIndex]
            arrOneIndex++
        }else{
            mergedArray[mergeArrIndex] = arrTwo[arrTwoIndex]
            arrTwoIndex++
        }

        mergeArrIndex++
    }

    // when arr two is exhausted but arr one have few elements left

    while(arrOneIndex < arrOne.length){
        mergedArray[mergeArrIndex] = arrOne[arrOneIndex]
        arrOneIndex++
        mergeArrIndex++
    }

    // when arr one is exhausted but arr two have few elements left

    while(arrTwoIndex < arrTwo.length){
        mergedArray[mergeArrIndex] = arrTwo[arrTwoIndex]
        arrTwoIndex++
        mergeArrIndex++
    }


    return mergedArray
}


// // console.log(combineSortedArrays([1,4,8],[2,3,7]))

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return combineSortedArrays(leftSorted, rightSorted)
}

console.log(mergeSort([4, 23, 7, 39, 19, 0, 9]))