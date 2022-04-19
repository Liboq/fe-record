const myAllSettled = function (promises){
  let arr = []
  let count = 0
  return new Promise((resolve,reject)=>{
    const processResults = (res,status,index)=>{
      arr[index] = {status,val:res}
      count++
      if(count === promises.length){
        resolve(arr)
      }
      promises.forEach((item,i)=>{
        Promise.resolve(item).then(res=>{
          processResults(res,'fullfilled',i)
        },err=>{
          processResults(err,'rejected',i)
        })
      })
    }
  })
}