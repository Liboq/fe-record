/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const len1 = text1.length;
    const len2 = text2.length;
    const dp = new Array(len1 + 1);
    for (let i = 0; i <= len1; i++) {
        dp[i] = new Array(len2 + 1).fill(0); // 只在外部循环中初始化内部数组
    }
    for (let i = 1; i <= len1; i++) {
        const c1 = text1[i - 1];
        for (let j = 1; j <= len2; j++) {
            const c2 = text2[j - 1];
            if (c1 === c2) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[len1][len2];
};