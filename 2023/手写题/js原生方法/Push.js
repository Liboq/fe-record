Array.prototype.Push = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i]
  }
  return this.length
}