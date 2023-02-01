// intersection of two arrays
// 1. Brute Force
// 2. Time complexity O(n^2)
// 3. Space complexity O(1)
/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @returns {number[]} output
 */
function intersectionOf2Arrays(nums1, nums2){
    let output = [];
    for(let i = 0; i<nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                output.push(nums1[i])
                nums1[i] = -1;
            }
        }
    }
    return output
}


console.log(intersectionOf2Arrays([2,6,8,5,4,3], [2,3,4,7]))
console.log(intersectionOf2Arrays([2,6,1,2], [1,2,3,4,2]))



// 1. Using hash map
// 2. Time complexity O(max(n,m))
// 3. Space complexity O(min(n,m))

/**
 * 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 * @return {number[]} output
 */
function intersectionOf2Arrays2(nums1, nums2){
    let obj = {};
    let output =[]
    for(let i = 0; i < nums2.length; i++){
        if(obj[nums2[i]]){
            obj[nums2[i]] += 1;
        }else{
            obj[nums2[i]] = 1;
        }
    }

    for(let i = 0; i < nums1.length; i++){
        if(obj[nums1[i]]){
            output.push(nums1[i])
            obj[nums1[i]] -= 1
            nums1[i] = -1;
        }
    }

    return output
}


console.log(intersectionOf2Arrays2([2,6,8,5,4,3], [2,3,4,7]))
console.log(intersectionOf2Arrays2([2,6,1,2], [1,2,3,4,2]))


// jsdoc -r ./src/
// ./node_modules/.bin/jsdoc -r ./arrays/