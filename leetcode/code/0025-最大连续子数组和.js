/**
 * https://leetcode.cn/problems/maximum-subarray/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let ans = nums[0];
    let sum = 0;
    for(const num of nums) {
        // 如果当前的 sum 大于 0，表示当前的子数组和对于后续的元素有增益效果，因此将当前元素 num 加到 sum 上。
        if(sum > 0) {
            sum += num;
        } 
        // 如果当前的 sum 小于等于 0，表示当前的 num 单独组成一个子数组的和要大于之前的子数组和，因此更新 sum 为当前元素 num。
        else {

            sum = num;
        }
        ans = Math.max(ans, sum);
    }
    return ans;
};
