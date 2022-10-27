function partition(arr, startIndex, endIndex){
    let pivotIndex = endIndex;
    let leftIndex = startIndex;
    let rightIndex = endIndex - 1;

    while(leftIndex <= rightIndex){
        // finding the leftIndex where item is greater than pivot
        while(leftIndex <= endIndex && arr[leftIndex] < arr[pivotIndex]){
            leftIndex += 1;
        }
        
        // finding the rightIndex where item is smaller than pivot
        while(rightIndex >= startIndex && arr[rightIndex] >= arr[pivotIndex]){
            rightIndex -= 1;
        }
        
        // if the positions are found swap the elements
        if(leftIndex < rightIndex){
            let tmp = arr[leftIndex];
            arr[leftIndex] = arr[rightIndex];
            arr[rightIndex] = tmp;

        }
        // putting the pivot in its final position
        else{
            let tmp = arr[leftIndex];
            arr[leftIndex] = arr[endIndex];
            arr[endIndex] = tmp;
        }
    }

    return leftIndex
}

function quickSortSubarray(arr, startIndex, endIndex){
    if(startIndex >= endIndex){
        return;
    }
    const pivot = partition(arr, startIndex, endIndex)

    quickSortSubarray(arr, startIndex, pivot-1);
    quickSortSubarray(arr, pivot + 1, endIndex)
}

function quickSort(arr){
    quickSortSubarray(arr, 0, arr.length - 1);
    return arr;
}

console.log(quickSort([4, 23, 7, 39, 19, 0, 9]))