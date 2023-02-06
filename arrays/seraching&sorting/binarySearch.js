/**
 * Time Complexity O(logn)
 * Space Complexity O(1)
 * @param {number[]} nums 
 * @param {number} x 
 * @returns {number}
 */


function binarySearch(nums, x){
    let start = 0;
    let end = nums.length - 1;
    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(nums[mid] == x){
            return mid
        }else if(nums[mid] < x){
            start = mid + 1;
        }else{
            end = mid - 1;
        }
    }

    return -1;
}


console.log(binarySearch([1, 3, 7, 9, 11, 12, 45], 3))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 7))