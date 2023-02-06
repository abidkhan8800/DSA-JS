// number of pairs present in the array for targeted value
// 1 - Brute Force approach
// 2 - Time Complexity O(n^2)
// 3 - Space Complexity O(1)

/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @return {number} count
 */
function twoSums(nums, target){
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i]+nums[j] == target){
                count++
            }
        }
    }

    return count;
}


console.log(twoSums([1,3,6,2,5,4,3,2,4], 7))
console.log(twoSums([2,8,10,5,-2,5], 10))
console.log(twoSums([1,1,1,1], 2))

// Approach 2
// 1 - Time Complexity O(n^2)
// 2 - Space Complexity O(n)

function twoSums2(nums, target){
    let count = 0;
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1
        }else{
            obj[nums[i]] = 1
        }
    }



    for(let i = 0; i < nums.length; i++){
        if( target - nums[i] == nums[i] && obj[target - nums[i]] > 0){
            count += 1
            obj[target - nums[i]] = 0
        }else if(obj[target - nums[i]] > 0){
            count += obj[target - nums[i]] * obj[nums[i]]
            obj[target - nums[i]] = 0;
            obj[nums[i]] = 0;
        }
    }

    return count
}

console.log(twoSums2([1,3,6,2,5,4,3,2,4], 7))
console.log(twoSums2([2,8,10,5,-2,5], 10))
console.log(twoSums2([1,1,1,1], 2))

// Approach 2
// 1 - Time Complexity O(n^2)
// 2 - Space Complexity O(n)
// solves the issue of array with same element and naking a pair

/**
 * 
 * @param {Number []} nums 
 * @param {number} target 
 * @return {number} count
 */

function twoSums3(nums, target){
    let count = 0;
    let obj = {}
    for(let i = 0; i < nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] += 1
        }else{
            obj[nums[i]] = 1
        }
    }



    for(let i = 0; i < nums.length; i++){
        if(obj[target - nums[i]]){
            count += obj[target - nums[i]]
        }

        if(target- nums[i] == nums[i]){
            count -= 1
        }
    }

    return count/2
}


console.log(twoSums3([1,3,6,2,5,4,3,2,4], 7))
console.log(twoSums3([2,8,10,5,-2,5], 10))
console.log(twoSums3([1,1,1,1], 2))