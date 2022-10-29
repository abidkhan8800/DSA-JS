function bubbleSort(arr){
    const n = arr.length;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n -i-1; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j]= temp;
            }
        }
    }

    return arr;
}


console.log(bubbleSort([4, 23, 7, 39, 19, 0, 9]))

