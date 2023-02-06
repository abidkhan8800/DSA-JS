function mergeSortedArray(nums1, nums2){
    let i = 0;
    let j = 0;
    let nums = []
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            nums.push(nums1[i])
            i++
        }else{
            nums.push(nums2[j])
            j++
        }
    }

    while(i<nums1.length){
        nums.push(nums1[i])
        i++
    }
    while(j<nums2.length){
        nums.push(nums2[j])
        j++
    }


    return nums
}



console.log(mergeSortedArray([4, 7, 9, 25, 30, 300, 450], [7, 45, 89, 90]))