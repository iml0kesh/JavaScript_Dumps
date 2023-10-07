const moveZeros = function(nums) {
    let p1 = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== 0){
            let temp = nums[p1];
            nums[p1] = nums[i];
            nums[i] = temp;
            p1++;
        }
    }
    console.log(nums);
}

const arr = [0,0,1,2,0,3];
moveZeros(arr);