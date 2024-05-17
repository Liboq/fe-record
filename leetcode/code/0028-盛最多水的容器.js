/**
 * 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

返回容器可以储存的最大水量。
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const right = height.length - 1
    let maxAreas = 0
    let left = 0
    while (left < right) {
        const area = (right - left) * (Math.min(height[left], height[right]))
        maxAreas = Math.max(maxAreas, area)
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return maxAreas

};
