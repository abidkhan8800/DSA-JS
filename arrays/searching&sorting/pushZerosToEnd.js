/**
 * 
 * @param {Number[]} nums 
 */

function pushZerosToEnd(nums){
    let j = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]!=0){
            nums[j++] = nums[i]
        }
    }

    while(j < nums.length){
        nums[j++] = 0
    }

    return nums;
}


console.log(pushZerosToEnd([2,0,0,1,3,0,0]))