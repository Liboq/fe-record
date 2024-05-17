/**
 * 给你一个下标从 0 开始的整数数组 tasks ，其中 tasks[i] 表示任务的难度级别。在每一轮中，你可以完成 2 个或者 3 个 相同难度级别 的任务。

返回完成所有任务需要的 最少 轮数，如果无法完成所有任务，返回 -1 。
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function (tasks) {
    // 记录每个任务在数组中出现的次数
    const cnt = new Map();
    // 函数遍历 tasks 数组，对于数组中的每个任务 t，它会检查 cnt 是否已经包含了这个任务。如果包含，则将对应的次数加一；如果不包含，则添加这个任务到 cnt 中，并设置其次数为1
    for (const t of tasks) {
        cnt.set(t, cnt.has(t) ? cnt.get(t) + 1 : 1);
    }
    let res = 0;
    for (const [k, v] of cnt) {
        if (v === 1) {
            return -1;
        } else if (v % 3 === 0) {
            res += v / 3;
        } else {
            res += Math.ceil(v / 3);
        }
    }
    return res;
};
const test = [2, 2, 3, 3, 2, 2, 4, 4, 4, 4, 4]
const times = minimumRounds(test)
const test1 = [2, 3, 3]
const times1 = minimumRounds(test1)
const test2 = [5, 5, 5, 5, 5, 5, 5]
const times2 = minimumRounds(test2)

console.log(times);
console.log(times1);
console.log(times2);


