var rotate = function(nums, k) {
    const rorations = nums.length % k;
    while(rorations > 0){
        let temp = nums[nums.length-1];
        for(let i=nums.length-1; i>=0; i--){
            nums[i] = nums[i-1];
        }
        nums[0] = temp;
        k--;
    }
    console.log(nums);
};
