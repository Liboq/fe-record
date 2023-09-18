Array.prototype._filter = function (callback) {
  const arr = []
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this) && arr.push(this[i])
  }
  return arr
}
const arr = [1, 2, 3]
console.log(arr._filter(item => {
  return item === 1
}));