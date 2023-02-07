/**
 * 
 * @param {Number []} nums 
 * @returns {Number}
 */

// Time Complexity O(nlogn)
// Space Complexity O(1)
function secondLargest1(nums){
    return nums.sort((a,b) => a - b)[nums.length - 2]
}


console.log(secondLargest1([2, 13, 4, 1, 3 ,6, 28]))

/**
 * 
 * @param {Number []} nums 
 * @returns {Number}
 */


// Time Complexity O(n)
// Space Complexity O(1)
function secondLargest2(nums){
    let l = -Infinity;
    let s = -Infinity;
    for(let item of nums){
        if(item > s && item != l){
            if(item > l){
                [l,s] = [item, l]
            }else{
                s = item
            }
        }
    }
    return s
}

console.log(secondLargest2([2, 13, 4, 1, 3 ,6, 28]))