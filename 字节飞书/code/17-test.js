function maxFreq(s, maxLetters, minSize, maxSize) {
  let str = "";
  let right = 0;
  const map = new Map();

  while (right < s.length) {
    str += s[right];
    while (str.length >= minSize && str.length <= maxSize) {
      map.has(str) ? map.set(str, map.get(str) + 1) : map.set(str, 1);
      str = str.slice(1);
    }

    right++;
  }
  const sortArr = [...map].sort((a, b) => b[1] - a[1]);
  for (const value of sortArr) {
    let hash = new Map();
    for (let i = 0; i < value[0].length; i++) { 
      if (hash.has(value[0][i])) {
        hash.set(value[0][i], hash.get(value[0][i]) + 1);
      }else{
        hash.set(value[0][i], 1);
      }
    }
    console.log(hash);
    if (hash.size <= maxLetters ) {
      return value[1];
    }
  }
  return 0;
}
let s = "aaaa";
let maxLetters = 1;
let minSize = 3;
let maxSize = 3;
console.log(maxFreq(s, maxLetters, minSize, maxSize));
