function moveZeros(nums){
    let left = 0;
    let right = 1;
    while(right < nums.length){
        if(nums[left] === 0 && nums[right] !== 0){
            nums[left] = nums[right];
            nums[right] = 0;
            left++;
        }
        right++;
    }
    return nums
}

console.log(moveZeros([0, 1, 0, 3, 12]));

