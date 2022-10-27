/* -> insertion sort steps to follow
    1. it requires two loops 
    2. element at index = 0 is already sorted 
    3. next compare the next incoming element with the sorted elemetn and place it in the correct position in the array
    4. the condition for the inner loop is that index(variable for inner loop) should be always greater than 0 and item[index - ] >= item[index]
    5. swap the values and decrement the counter (index)

 */

function insertionSort(arr){
	let n = arr.length
  for(let i = 0; i < n; i++){
  	let index = i;
    while(index > 0 && arr[index - 1] >= arr[index]){
        let temp = arr[index];
        arr[index] = arr[index - 1];
        arr[index - 1] = temp
        index -= 1
    }
  }
  
  return arr;
}

console.log(insertionSort([2,4,7,8,1,3,6]))