Array.prototype._sort = function (comparison) {
  if (typeof comparison === "undefined" || comparison instanceof Function) {
    let arr = this  // this就是原数组
    let len = arr.length
    let cur, preIndex
    // 采用插入排序的方式
    for (let i = 1; i < len; i++) {
      cur = arr[i]
      preIndex = i - 1
      // fn不存在，将数字会转换为字符串，对比unicode位
      // fn 存在，执行fn，将结果与0做比较
      while (preIndex >= 0 && (fn ? fn(cur, arr[preIndex]) < 0 :
        cur.toString() < arr[preIndex].toString())) {
        arr[preIndex + 1] = arr[preIndex]
        preIndex--
      }
      arr[preIndex + 1] = cur
    }
    return arr
  }
  throw new TypeError("The comparison function must be either a function or undefined");
}
const a = []
a.sort