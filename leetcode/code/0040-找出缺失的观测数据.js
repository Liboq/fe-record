// 现有一份 n + m 次投掷单个 六面 骰子的观测数据，骰子的每个面从 1 到 6 编号。观测数据中缺失了 n 份，你手上只拿到剩余 m 次投掷的数据。幸好你有之前计算过的这 n + m 次投掷数据的 平均值 。

// 给你一个长度为 m 的整数数组 rolls ，其中 rolls[i] 是第 i 次观测的值。同时给你两个整数 mean 和 n 。

// 返回一个长度为 n 的数组，包含所有缺失的观测数据，且满足这 n + m 次投掷的 平均值 是 mean 。如果存在多组符合要求的答案，只需要返回其中任意一组即可。如果不存在答案，返回一个空数组。

// k 个数字的 平均值 为这些数字求和后再除以 k 。

// 注意 mean 是一个整数，所以 n + m 次投掷的总和需要被 n + m 整除。
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    const len = rolls.length
    let res = []
    const sonTotal = rolls.reduce((prev, next) => prev + next, 0)
    const allTotal = mean * (len + n)
    let average = Math.floor((allTotal - sonTotal) / n)

    let extra = (allTotal - sonTotal) % n
    // 平均值小于1，或者平均值大于6，直接返回空数组
    if (average > 0 && ((extra && average + 1 <= 6) || (!extra && average <= 6))) {
        res = Array(extra).fill(average + 1).concat(Array(n - extra).fill(average));
    }
    return res
};
const test = missingRolls([6, 1, 5, 2], 4, 4)
console.log(test);