class Observer{
  constructor(data){
    this.observer(data)
  }
  observer(data){
    if(data && typeof data === 'object'){
      //数据劫持
      Object.keys(data).forEach(key =>{
        this.defineReactive(data,key,data[key])
      })
    }
  }
  defineReactive(obj,key,value){
    this.observer(value)
    const dep = new Dep()
    Object.defineProperty(obj,key,{
      enumerable: true, //是否可以被枚举
      configurable: false, //是否可以被删除+'
      get(){
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      // 通过箭头函数改变this指向到Class Observe
      set:(newval)=>{
        this.observer(newval)
        if(newval !== value){
          value = newval
          // 如果新旧值不同，则告诉Dep通知变化
          dep.notify()
        }
      }
    })
  }
}