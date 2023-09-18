// 获取数组的层级
Array.prototype._getLevel = function () {
  let max = 1
  for (let i = 0; i < this.length; i++) {
    if (this[i] instanceof Array) {
      const depth = a._getLevel() + 1
      if (depth > max) max = depth
    }
  }
  return max
}