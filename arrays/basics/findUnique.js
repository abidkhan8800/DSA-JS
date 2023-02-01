// Find the unique element in array

// 1. brute force
// 2. Time Complexity O(n2)
// 3. Space Complexity O(1)

function findUnique(arr){
    if(arr.length == 1){
        return arr[0]
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i == arr.length - 1 && j == arr.length - 1) return arr[i]
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


console.log(findUnique([2,7,2,7,4]), 4)
console.log(findUnique([1,3,1,3,6,6,7,10,7]),10)
console.log(findUnique([2,2,1]), 1)

// 1. Bitwise approach
// 2. Time Complexity O(n)
// 3. Space Complexity O(1)

function findUnique2(nums){
    let unique  = 0;
    for(let i = 0; i < nums.length; i++){
        unique ^= nums[i]
    }
    return unique
}

console.log(findUnique2([2,7,2,7,4]), 4)
console.log(findUnique2([1,3,1,3,6,6,7,10,7]),10)
console.log(findUnique2([2,2,1]), 1)