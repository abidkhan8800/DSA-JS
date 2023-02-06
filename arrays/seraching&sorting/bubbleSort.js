/**
 * 
 * @param {Number[]} nums 
 * @returns {Number []} same sorted array
 */
function bubbleSort(nums){
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[j] >  nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }

    return nums
}



console.log(bubbleSort([8,4,7,6]))