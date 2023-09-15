Array.prototype._reduce = function (callback, initVal) {
  let start = 0
  let result = initVal
  if (initVal === undefined) {
    result = this[0]
    start = 1
  }
  for (let i = start; i < this.length; i++) {
    result = callback(result, this[i], i, this)
  }
  return result

}
const arr = [1, 2, 3]
console.log(arr._reduce((pre, cur) => {
  return pre + cur
}));