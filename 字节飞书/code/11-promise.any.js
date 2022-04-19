const myPromiseAny=function(promises){
  let arr=[]
  let count =0
  return new Promise((resolve,reject)=>{
    promises.forEach((item,i) => {
      Promise.resolve(item).then(resolve,err=>{
        arr[i] = {status:'reject',val:err}
        count ++
        if(count ===promises.length) {
          reject(new Error('没有promise执行成功'))
        }
      })
    });
  })
}