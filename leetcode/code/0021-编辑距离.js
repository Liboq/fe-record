// https://leetcode.cn/problems/edit-distance/solutions/2354497/72-bian-ji-ju-chi-by-wetoria-04hr/
/**
 * 用于计算两个字符串之间的最小编辑距离，也称为 Levenshtein 距离。这个距离表示在将一个字符串转换为另一个字符串所需的最少单字符编辑次数（插入、删除、替换）。
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length
    const len2 = word2.length
    // 创建了一个二维数组 dp，用来存储计算过程中的中间结果。这个数组的维度是 len1 + 1 行和 len2 + 1 列。
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1))
    // 初始化 dp[0][0] 为 0，表示两个空字符串之间的距离为 0
    dp[0][0] = 0
    // 通过两个 for 循环，初始化 dp 数组的第一行和第一列，分别表示将一个空字符串转换为另一个字符串的最小编辑距离。
    for (let i = 1; i <= len1; i++) dp[i][0] = dp[i - 1][0] + 1
    for (let i = 1; i <= len2; i++) dp[0][i] = dp[0][i - 1] + 1
    // 接下来的两个嵌套循环用来填充 dp 数组的其余部分，从 dp[1][1] 开始到 dp[len1][len2]。在这个过程中，通过比较 word1 和 word2 对应位置的字符，决定当前位置的最小编辑距离。
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                // 如果 word1[i - 1] 等于 word2[j - 1]，表示当前字符相同，那么 dp[i][j] 就等于 dp[i - 1][j - 1]，因为不需要进行编辑操作。
                dp[i][j] = dp[i - 1][j - 1]
            } else {
                // 如果当前字符不相同，那么需要在插入、删除、替换三种操作中选择最小的编辑次数，
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
            }
        }

    }
    return dp[len1][len2]
};