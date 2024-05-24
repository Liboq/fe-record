/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
    const len = nums.length
    let ans = []

    for (let i = 0; i < len; i++) {
        // 数组 后面的都比前面大 
        while (ans.length > 0 && len - i + ans.length > k && ans[ans.length - 1] > nums[i]) {
            ans.pop()
        }
        ans.push(nums[i])
    }
    return ans

};
const nums =[2,4,3,3,5,4,9,6]
console.log(mostCompetitive(nums, 2))