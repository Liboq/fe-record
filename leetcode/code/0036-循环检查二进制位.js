//编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中 
// 设置位
// 的个数（也被称为汉明重量）。
// 示例 1：

// 输入：n = 11
// 输出：3
// 解释：输入的二进制串 1011 中，共有 3 个设置位。
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = 0
    for (let i = 0; i < 32; i++) {
        if ((n & (1 << i)) !== 0) {
            res++
        }
    }
    return res
};
const test = 2147483645

console.log(hammingWeight(test));