/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let pre = nums[0]
    let index = 1
    const len = nums.length
    for (let i = 1; i < len; i++) {
        if (nums[i] !== pre) {
            pre = nums[i]
            nums[index] = pre
            index++
        }
    }
    console.log(nums);
    return nums.slice(0,index)
};
const test = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(test));