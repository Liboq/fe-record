/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 * 链接：https://leetcode.cn/problems/sequential-digits/
 */
// 思路真的很重要
var sequentialDigits = function (low, high) {
    let res = [];

    for (let i = 1; i < 10; i++) {//这里是从1到9，就是数字的最高位是哪个数
        let x = i;
        while (x <= high) {
            let r = x % 10;
            if (r == 0) break
            if (x >= low) res.push(x);//因为得到的x形式都是对的，所以只要大于最小值就可以加入数组里
            x = x * 10 + r + 1  //这里得到的x都是符合题目需要的数字的
        }
    }
    res.sort((a,b)=>a-b)//排序
    return res
};
sequentialDigits(11, 22)