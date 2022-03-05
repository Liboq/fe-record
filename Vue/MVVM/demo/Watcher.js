class Watcher{
  constructor(vm,expr,cb){
    this.vm = vm
    this.expr = expr
    this.cb = cb
    this.oldVal = this.getOldVal()
  }
  getOldVal(){
    Dep.target = this
    const oldVal = compileUtil.getVal(this.expr,this.vm)
    Dep.target = null
    return oldVal
  }
  update(){
    const newVal = compileUtil.getVal(this.expr,this.vm)
    if(newVal!== this.oldVal){
      this.cb(newVal)
    }
  }
}

class Dep{
  constructor(){
    this.subs = []
  }
  addSub(watcher){
    this.subs.push(watcher)
  }
  notify(){
    console.log('观察者',this.subs)
    this.subs.forEach(watcher => watcher.update())
  }
}