Array.prototype.ForEach = function(callback,thisBinding = globalThis){
  // 对callback进行判断
  if(typeof callback !== 'function'){
    throw new TypeError(callback + " is not a function");
  }
  // 判断 是否为可迭代对象
  if(this ===null|| typeof this[Symbol.iterator]!=='function'){
    return new TypeError(this+"is not interable")
  }
  // 转换为数组
  const arr = [...this]
  for (let i = 0; i < arr.length; i++) {
     callback.call(thisBinding,arr[i],i,arr)
  }
}
// const arr = [1,2,3]
// arr.ForEach(item=>{
//     console.log(item);
// })
[4,5,6].ForEach(item=>{
  console.log(item);
})