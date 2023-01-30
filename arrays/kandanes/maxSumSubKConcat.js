function maxSubSumKConcat(arr, k){
	let newArr = [];
  let maxSum = -Infinity;
  let currentSum = 0;
  for(let i = 0; i < k; i++){
  	newArr = [ ...newArr, ...arr]
  }
  
  for(let i= 0; i < newArr.length; i++){
  	currentSum += newArr[i];
    maxSum = Math.max(maxSum, currentSum);
    if(currentSum < 0){
    	currentSum = 0;
    }
  }
  
  return maxSum
  
}

console.log(maxSubSumKConcat([1,3],3) == 12)
console.log(maxSubSumKConcat([1, -2, 1],2) == 2)
console.log(maxSubSumKConcat([1,-1, 2],3) == 6)
console.log(maxSubSumKConcat([0,-1, 2],3) == 4)
