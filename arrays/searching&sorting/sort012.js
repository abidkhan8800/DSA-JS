function sort012o(nums){
    let nz = 0
    let nt = nums.length - 1;
    let mid = 0;
    while(mid <= nt){
        if(nums[mid] == 0){
            [nums[mid], nums[nz]] = [nums[nz], nums[mid]];
            mid++;
            nz++
        }else if(nums[mid] == 1){
            mid++
        }else{
            [nums[mid], nums[nt]] = [nums[nt], nums[mid]];
            nt--
        }
    }

    return nums;
}


console.log(sort012o([0, 1, 2, 0, 2, 0, 1]))