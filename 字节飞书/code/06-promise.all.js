// promise.all()的实现
Promise.myAll() = (promises)=>{
return new Promise((reslove,reject)=>{
  let count = 0
  // 存放结果
  let result = []
  const len = promises.length
  if(len ===0){
    return reject([])
  }
  promises.forEach((p,i)=>{
    Promise.resolve(p).then((res)=>{
      count +=1
      // 存放每个Promise的返回值
      result[i]=res
      if(count === len){
        reslove(result)
      }
      // 监听promises中Promise 只要有一个失败，那么我们自己返回的Promise也会失败
    }).catch(reject)
  })
})
}