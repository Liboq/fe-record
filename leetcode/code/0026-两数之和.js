/**
 * https://leetcode.cn/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const newNums = nums
    for (let i = 0; i < nums.length; i++) {

        const flag = newNums.findIndex((item, index) => item === target - nums[i] && index !== i)
        if (flag !== -1) {
            return [i,flag]
        } 
    }
};
const nums = [3, 2, 4]
const target = 6
console.log(twoSum(nums, target));