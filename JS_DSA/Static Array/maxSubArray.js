// Given an integer array nums, find the subarray with the largest sum, and return its sum.

const maxSubArray = function (nums) {
    let max = nums[0];
    let currSum = 0;
    for(let i = 0; i<nums.length; i++){
        if(currSum < 0) {
            currSum = 0;
        }
        currSum += nums[i];
        max = Math.max(max,currSum);
    }
    return max;
}