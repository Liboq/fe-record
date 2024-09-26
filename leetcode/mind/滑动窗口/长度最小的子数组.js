// 题目描述：

// 给定一个含有n个正整数的数组和一个正整数target 。
// 找出该数组中满足其和≥target的长度最小的连续子数组[nums l，nums l+1,…, nums r-1， nums r]，并返>回其长度。如果不存在符合条件的子数组，返回0。
// =======================================
// 示例 1：
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。
// =======================================
// 示例 2：
// 输入：target = 4, nums = [1,4,4]
// 输出：1
// =======================================
// 示例 3：
// 输入：target = 11, nums = [1,1,1,1,1,1,1,1]
// 输出：0

// =======================================

const minSubArrayLen = (target, nums) => {
    let right = 1
    let left = 0
    let min = nums.length
    let sum = nums[0]
    if (sum >= target) return 1
    while (right < nums.length) {
        sum = sum + nums[right]
        while (sum >= target) {
            if (left === right) {
                min = 1
            }
            min = Math.min(min, right - left + 1)
            sum = sum - nums[left]
            left++
        }
        right++
    }
    return min === nums.length ? 0 : min

}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))