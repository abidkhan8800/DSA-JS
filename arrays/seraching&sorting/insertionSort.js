/**
 * 
 * @param {number []} nums 
 * @returns {Number[]}
 */

// 1 - Time Complexity - O(n^2)
// 2 - Space Complexity - O(1)

function insertionSort(nums){
    for(let i = 0; i < nums.length; i++){
        let ind = i;
        while(ind > 0 && nums[ind] < nums[ind-1]){
            [nums[ind], nums[ind - 1]] = [nums[ind-1], nums[ind]];
            ind--;
        }
    }
    return nums
}

console.log(insertionSort([8,4,7,6]))