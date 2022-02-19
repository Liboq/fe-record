/**
 * @param {number[]} nums
 * @return {number}
 */
//有更简单的方法，只要计算一边，让一边*2+当前的值=总和
var pivotIndex = function (nums) {
  let m = nums.length;

  let temp = 0;
  for (let i = 0; i < m; i++) {
    let left = 0;
    let right = 0;
    for (let k = 0; k < i; k++) {
      left += nums[k]
    }
    for (let j = i + 1; j < m; j++) {
      right += nums[j]
    }
    if (left === right) {
      temp = i
      console.log(temp);
      break
    } else {
      temp = -1
    }

  }
  console.log(temp);
  return temp
};
pivotIndex([1, 7, 3, 6, 5, 6])
