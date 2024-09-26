function lengthOfLongestSubstring(s) {
  let ans = 0;
  let map = new Map();
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], true);
    } else {
      while (left < i) {
        if (s[left] === s[i]) {
          map.delete(s[left]);
          break;
        }
        map.delete(s[left]);
        left++;
      }
      map.set(s[i], true);
    }

    ans = Math.max(map.size, ans);
  }
  return ans;
}
let s = "aabaab!bb";
console.log(lengthOfLongestSubstring(s));
