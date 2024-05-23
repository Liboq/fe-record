/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestEqualSubarray = function (nums, k) {
    let n = nums.length
    let pos = new Map()
    for (let i = 0; i < n; i++) {
        if (!pos.has(nums[i])) {
            pos.set(nums[i], [])
        }
        pos.get(nums[i]).push(i)
    }
    let ans = 0
    for (let vec of pos.values()) {
        let start = 0
        let end = 0
        while (end < vec.length) {
            // 例如 [1, 1, 2, 2, 1, 1]
            // vec 得到[0,1,4,5]
            // i表示 原数组 nums中同一数字前面位置的下标
            // j表示 原数组 nums中同一数字后面位置的下标
            // 要使得 区间[i,j] 减去 区间内已有的重复元素个数 小于等于 k
            // 所以 我们需要 (vec[end] - vec[start]+1) - (end - start+1)  <= k
            // (vec[end] - vec[start]+1) 表示 [i,j] 区间中存在的数字个数
            // (end - start+1) 表示 区间[i,j]中已有的重复元素个数
            // 如果 大于k 说明区间[i,j]中 存在不重复元素个数大于k，则需要start往前走
            // 如果 小于等于k 说明区间[i,j]中 存在不重复元素个数小于等于k，则需要end往前走
            if (vec[end] - vec[start] - (end - start) <= k) {
                ans = Math.max(ans, end - start + 1)
                end++
            } else {
                start++
            }

        }
    }
    return ans
};
const test = [1, 3, 2, 3, 1, 3]
const nums = [1, 1, 2, 2, 1, 1]
console.log(longestEqualSubarray(test, 3))
console.log(longestEqualSubarray(nums, 2))
