function binarySearch(arr, num){
	let low = 0;
  let high = arr.length - 1;
  while(low <= high){
  	let mid = Math.floor((low + high) / 2);
    if(arr[mid] == num) {
    
    	return mid;
      
    }
    
    if(arr[mid] > num){
    
    	high = mid - 1
      
    }else{
    
    	low = mid + 1
      
    }
  }
  return -1
}



// - [0, 1, 2, 3, 4, 5, 7, 8, 9]

console.log(binarySearch([0, 1, 2, 3, 4, 5, 7, 8, 9], 7));