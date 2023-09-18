Array.prototype._map = function (callback,thisArgs) {
  if (typeof callback !== "function") {
    throw new TypeError(`${cb} is not a function`);
  }
  // 排除this为非可迭代对象情况
  if (this == null || typeof this[Symbol.iterator] !== "function") {
    throw new TypeError(`${this} is not a iterable`);
  }
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback.call(thisArgs,this[i], i, this));
  }
  return result;
};
const arr = [1, 2, 3];
const res = arr._map((ele, index, arr) => {
  return ele * 2;
});
console.log(res);
