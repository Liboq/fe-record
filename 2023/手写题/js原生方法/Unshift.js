Array.prototype._unshift = function(...args){
this.reverse().push(...args.reverse())
this.reverse()
return this.length
}