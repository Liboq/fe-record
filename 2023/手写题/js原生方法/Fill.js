Array.prototype._fill = function (value, start = 0, end = this.length) {
  end = end < 0 ? this.length + end : end
  if (typeof start !== "number" || typeof end !== "number") {
    return this
  }
  for (let i = start; i < end; i++) {
    this[i] = value
  }
  return this
}
const arr = [3, 2, 1, 4]
console.log(arr._fill(1, 1, ));