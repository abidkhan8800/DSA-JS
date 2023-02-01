// Find Duplicate element
// 1. Brute Force
// 2. Time Complexity O(n2)
// 3. Space Complexity O(1)

console.log("Approach 1")
function findDuplicate(nums){
    for(let i = 0; i< nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(i==j) continue;
            if(nums[i] == nums[j]) {
                return nums[i]
            }
        }
    }
}


console.log("Actual: ",findDuplicate([1,3,4,2,2]), "Expected",2, findDuplicate([1,3,4,2,2]) == 2 ? "PASSED" : "FAILED", "\n")


// 1. Using sorting
console.log("Approach 2")
function findDuplicate2(nums){
    nums.sort((a,b)=> a-b)
    for(let i = 0; i< nums.length-1; i++){
        if(nums[i] == nums[i+1]){
            return nums[i]
        }
    }
}

console.log("Actual: ",findDuplicate([1,3,4,2,2]), "Expected",2, findDuplicate([1,3,4,2,2]) == 2 ? "PASSED" : "FAILED", "\n")



