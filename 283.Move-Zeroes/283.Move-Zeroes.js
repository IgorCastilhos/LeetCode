var moveZeroes = function(nums) {
    let lastZero = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const aux = nums[lastZero]
            nums[lastZero++] = nums[i]
            nums[i] = aux
        }
    }
    return nums
};

console.log(moveZeroes([0, 1, 0, 3, 12]))
