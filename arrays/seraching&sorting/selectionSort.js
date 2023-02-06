/**
 * 
 * @param {Number []} nums 
 * @returns {Number} index of the element
 */

// 1 - Time Complexity O(n^2)
// 2 - Space Complexity O(1)
function selectionSort(nums){
    for(let i = 0; i < nums.length; i++){
        let min = i;
        for(let j = i + 1; j < nums.length; j++){
            if(nums[j] < nums[min]){
                min = j
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]]
    }


    return nums;
}


console.log(selectionSort([8,4,7,6]))