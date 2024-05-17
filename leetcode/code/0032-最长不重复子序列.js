/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    // 无重复字符的最长子串
    let maxLen = -1;
    let hash = new Map();
    let start = 0;
    for (let end = 0; end < s.length; end++) {
        let c = s[end];
        
        if (hash.has(c)) {
            // 只要连续移动字符，直到新的窗口的字符中不包含第一次出现的c字符位置
            while (start < end && s[start] !== c) {
                hash.delete(s[start]);
                start++;
            } 
            start++; // 此时的start指向重复字符的下一个位置
        } else {
            hash.set(c); // 只记录字符是否存在，不需要值
        }

        maxLen = Math.max(maxLen, end - start + 1);
    }
    return maxLen;
};