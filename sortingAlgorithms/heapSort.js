function rightChildIndex(index){
    return (index * 2) + 2;
}

function leftChildIndex(index){
    return (index * 2) + 1;
}

function bubbleDown(heap, heapLength, index){
   while(index < heapLength){
    const leftIndex = leftChildIndex(index);
    const rightIndex = rightChildIndex(index);
    if(leftIndex >= heapLength) break;

    let largestChildIndex = leftIndex;
    if(rightIndex < heapLength && heap[leftIndex] < heap[rightIndex]){
        largestChildIndex = rightIndex;
    }

    if(heap[index] < heap[largestChildIndex]){
        const tmp = heap[largestChildIndex];
        heap[largestChildIndex] = heap[index];
        heap[index] = tmp;

        index = largestChildIndex;
    }
    else {
        break;
    }
   }
}


function removeMax(heap, heapLength){
    const maxValue = heap[0];

    heap[0] = heap[heapLength - 1];

    bubbleDown(heap, heapLength - 1, 0)

    return maxValue;
}

function heapify(arr){
    for(let index = arr.length; index >= 0; index--){
        bubbleDown(arr, arr.length, index)
    }
}


function heapSort(arr){
    heapify(arr);

    let heapSize = arr.length;
    while(heapSize > 0){
        const largestValue = removeMax(arr, heapSize);
        heapSize -= 1
        arr[heapSize] = largestValue;
    }

    return arr;
}

console.log(heapSort([4, 23, 7, 39, 19, 0, 9]))