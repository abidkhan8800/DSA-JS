/**
 * 
 * @param {Number[]} nums 
 * @param {Number} n 
 * @returns {Number []} 
 */
function rotateArray(nums, n){
    let arr1 = nums.splice(0, n);
    return [...nums, ...arr1]
}


console.log(rotateArray([1,2,3,4,5,6,7,8,9], 3))