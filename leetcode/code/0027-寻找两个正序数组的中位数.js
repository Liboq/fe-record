/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a,b)=>a-b)
    console.log(nums);
    if (nums.length % 2 === 0) {
        const max = Math.floor(nums.length / 2)
        const min = max - 1
        return (nums[max] + nums[min]) / 2
    } else {
        const target = Math.floor((nums.length - 1 )/ 2)
        return nums[target]
    }
};
const res = findMedianSortedArrays([1,3],[2])
console.log(res);