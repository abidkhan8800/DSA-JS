/* -> selection sort steps to follow
    1. it requires to loops 
    2. first find the minimum value index and replace it with first index of the array
    3. continue till all the array is sorted
    Note: in the outer loop start with i as min index and run the inner loop from i+1 to n
 */

function selectionSort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i ++){
        let minIndex = i; 
        let temp;
        for(let j = i + 1; j < n; j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }

    return arr
}

console.log(selectionSort([8,4,7,6]))