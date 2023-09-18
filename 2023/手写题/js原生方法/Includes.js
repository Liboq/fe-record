// searchElement 查找的元素 
// fromIndex 从哪个位置开始查询
Array.prototype._include = function (searchElement, fromIndex) {
  if (this.length === 0) {
    return false
  }
  fromIndex = fromIndex || 0
  // 如果小于0则转换索引
  if (fromIndex < 0) {
    fromIndex = this.length + fromIndex
  }
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === searchElement) {
      return true
    }
  }

}
