Promise.myReslove((value)=>{
  // 如果参数是promise实例,直接返回
  if(value&&typeof value ==='object' &&(value instanceof Promise)){
    return
  }
  // 如果参数不是promise实例，则要用Promise包装一下
  return new Promise((reslove)=>{
    reslove(value)
  })
})