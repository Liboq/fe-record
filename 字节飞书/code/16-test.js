function decrypt(code, k) {
  let ans = [];
  let sum = 0;
  const len = code.length;
  for (let i = 0; i < len; i++) {
    let rLen;
    let lLen;
    if (k > 0) {
      rLen = i + k >= len ? len : i + k;
      lLen = rLen >= len ? i + k - rLen + 1 : 0;
      const rSum = code
        .slice(i + 1, rLen + 1)
        .reduce((prev, next) => prev + next, 0);
      const lSum = code.slice(0, lLen).reduce((prev, next) => prev + next, 0);
      sum = rSum + lSum;
    } else if (k === 0) {
      return new Array(len).fill(0);
    } else {
      const sybol = Math.abs(k);
      lLen = i - sybol > 0 ? i - sybol : 0;
      rLen = lLen > 0 ? len : len + i - sybol;

      const lSum = code.slice(lLen, i).reduce((prev, next) => prev + next, 0);
      const rSum = code.slice(rLen, len).reduce((prev, next) => prev + next, 0);
      sum = rSum + lSum;
    }
    console.log(lLen, rLen);
    ans.push(sum);
  }
  return ans;
}
const code = [10, 8, 7, 7, 5, 3, 9, 6];
const k = 4;

console.log(decrypt(code, k));
