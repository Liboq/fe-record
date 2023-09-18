// 实现迭代器
Array.prototype.interator = function () {
  let i = 0
  return {
    next: () => {
      return {
        value: this[i++],
        done: i < this.length ? false : true
      }
    }
  }
}