// Find the unique element in array

// 1. brute force

function findUnique(arr){
    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i==j) continue;
            if(arr[i] == arr[j]) {
                break;
            };
            if(j == arr.length - 1){
                return arr[i];
            }
        }
    }
    return -1
}


console.log(findUnique([2,4,7,2,7]), 4)
console.log(findUnique([1,3,1,3,6,6,7,10,7]),10)