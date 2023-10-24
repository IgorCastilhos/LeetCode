/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        if (complement in numIndices) {
            return [numIndices[complement], i];
        }
        numIndices[currentNum] = i;
    }
    return [];
}
