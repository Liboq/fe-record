// flat 数组扁平化 实现
Array.prototype._flat = function (deep = 1) {
  let result = [];
  deep--;
  for (const item of this) {
    if (Array.isArray(item) && deep >= 0) {
      result = result.concat(item._flat(deep));
    }else{
        result.push(item)
    }
  }
  return result;
};
const arr = [1, [2, 3, [4, 5]], 1, 2, [6, 7]];
const result = arr._flat(2);
console.log(result);
