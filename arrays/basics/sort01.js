// to sort 0 1 in an array
// 1 - brute force
// 2 - Time complexity O(n)
// 3 - Space complexity O(1)

/**
 * sort 0 1 in an array
 * @param {number[]} nums - input
 * @return {number[]} output
 */
function sort01(nums){
    let countZero = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 0){
            countZero++
        }
    }

    for(let i = 0; i<countZero; i++){
        nums[i] = 0
    }

    for(let i = countZero; i < nums.length; i++){
        nums[i] = 1
    }


    return nums;
}



console.log(sort01([0,0,1,1,0,0,1,1.0]))

/**
 * 
 * @param {number[]} nums 
 * 
 */

function sort01t(nums){
    let i = 0;
    let j = nums.length - 1;
    while(i<j){
        if(nums[i] == 1){
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j--;
        }else{
            i++
        }
    }
    return nums
}

console.log(sort01t([0,0,1,1,0,0,1,1.0]))