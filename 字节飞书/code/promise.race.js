const myPromiseRace=function(promises){
return new Promise((resolve,reject)=>{
  for(const item of promises){
    Promise.resolve(item).then(resolve,reject)
  }
})
}