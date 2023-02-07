/**
 * 
 * @param {Number []} nums 
 * @returns { Number}
 */
function checkArrayRotation(nums){
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] > nums[i+1]){
            return i + 1;
        }
    }

    return 0;
}

console.log(checkArrayRotation([3,6,8,9,10]));
console.log(checkArrayRotation([10,20,30,1]));