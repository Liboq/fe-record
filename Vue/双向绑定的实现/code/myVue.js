class myVue{
  constructor(options){
    this.$el = options.el
    this.$data = options.data
    this.$options =options
    if(this.$el){
      // 1.实现数据观察者
      new Observer(this.$data)
      // 2.实现指令解析器
      new Compile(this.$el,this)
      // 实现proxy代理
     this.proxyData(this.$data)
    }
  } 
  proxyData(data){
    for(const key in data){
      Object.defineProperty(this,key,{
        get(){
          return data[key]
        },
        set(newVal){
          data[key] = newVal
        }
      })
    }
  }
}

class Compile{
  constructor(el,vm){
    // 判断是否为元素节点，如果不是就查找
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    this.vm = vm
    // 1.获取文档碎片对象，放入内存中，减少页面的回流和重绘
    const  fragment = this.node2Fragment(this.el)
    // 2.编译模板
    this.compile(fragment)
    // 追加子元素到根元素上
    this.el.appendChild(fragment)

  }
  // 判断是否为元素节点
  isElementNode(node){
    return node.nodeType === 1
  }
  node2Fragment(el){
    // 创建文档碎片对象
    const fragment =document.createDocumentFragment()
    let firstChild
    while (firstChild = el.firstChild) {
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  compile(fragment){
    const  childNodes =fragment.childNodes;
    [...childNodes].forEach(child=>{
      if(this.isElementNode(child)){
        // 编译元素节点
        this.compileElement(child)
      }else{
        // 编译文本节点
        this.compileText(child)
      }
      if(child.childNodes&&child.childNodes.length){
        this.compile(child)
      }
    })
  }
  // 编译元素节点
  compileElement(node){
    const attributes = node.attributes; 
    [...attributes].forEach(attr=>{
      const {name,value} = attr;
      if(this.isDirective(name)){
        const [,directive]=name.split('-')
        const [dirName,eventName] = directive.split(':')
        // 更新数据 数据驱动视图
        compileUtil[dirName](node,value,this.vm,eventName)
        // 删除指令上标签上的属性
        node.removeAttribute('v-'+directive)

      }else if(this.isElementNode(name)){
        let [,eventName] = name.split('@')
        compileUtil['on'](node,value,this.vm,eventName)
      }
    })
  }
  // 编译文本节点
  compileText(node){
    const content = node.textContent
    if(/\{\{(.+?)\}\}/.test(content)){
      console.log(content);
      compileUtil['text'](node,content,this.vm)
    }
  }
  //  判断当前attrName 是否为一个指令，仅需判断是否以v- 开头
  isDirective(attrName){
    return attrName.startsWith('v-')
  }
  // 判断当前attrName是否是一个事件，以@开头的事件绑定
  isEventName(attrName){
    return attrName.startsWith('@')
  }
}
// 指令处理集合
const compileUtil = {
  getVal(expr,vm){
    return expr.split('.').reduce((data,currentVal)=>{
      // console.log(currentVal);//name age
      return data[currentVal]//‘前端’ 18
    },vm.$data)
  },
  // 获取新值，对{{a}}--{{b}},这种格式进行处理
  getContentVal(expr,vm){
    return expr.replace(/\{\{(.+?)\}\}/,(...args)=>{
      return this.getVal(args[1],vm)
    })
  },
  text(node,expr,vm){
    let value;
    console.log(expr);
    if(expr.indexOf('{{')!==-1){
      value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
        // 绑定watcher从而更新视图
        console.log(args[1]);
        new Watcher(vm,args[1],()=>{
          console.log(expr);
          this.updater.textUpdater(node,this.getContentVal(expr,vm))
          
        })
        return this.getVal(args[1],vm);
      })
    }else{//文本节点 也可能是v-text='obj.name' v-text ='msg'
      value = this.getVal(expr,vm)
      new Watcher(vm,expr,(newVal)=>{
         // 绑定watcher从而更新视图
        console.log(expr);
        
        this.updater.textUpdater(node,newVal)
        console.log(expr);
      })
    }
    this.updater.textUpdater(node,this.getContentVal(expr,vm))
  },
  html(node,expr,vm){
    const value = this.getVal(expr,vm)
    new Watcher(vm,expr,(newVal)=>{
      this.updater.htmlUpdater(node,newVal)
    })
    this.updater.htmlUpdater(node,value)
  },
  model(node,expr,vm){
      // 订阅数据变化时 绑定更新函数 更新视图的变化
    // 数据==>视图
    const value =this.getVal(expr,vm)
    new Watcher(vm,expr,(newVal)=>{
      this.updater.modelUpdater(node,newVal)
    })
    this.updater.modelUpdater(node,value)
  },
  on(node,expr,vm,eventName){
    let fn = vm.$options.method && vm.$options.method[expr]
    //1.让fn通过bind函数指向原来的vm 2,默认冒泡
    node.addEventListener(eventName,fn.bind(vm),false)
  },
  bind(node,expr,vm,attrName){
    let attrVal = this.getVal(expr,vm)
    this.updater.attrUpdater(node,attrName,attrVal)
  },
  // 更新的函数
  updater:{
    textUpdater(node,value){
      console.log(value);
      node.textContent = value
    },
    htmlUpdater(node,value){
      node.innerHTML = value
    },
    modelUpdater(node,value){
      node.value=value
    }, 
    attrUpdater(node,attrName,attrVal){
      node.setAttribute(attrName,attrVal)
    }
  }

}
class Observer{
  constructor(data){
    this.observe(data)
  }
  observe(data){
    if(data&& typeof data ==='object'){
      Object.keys(data).forEach(key=>{
        console.log(data);
        this.defineReactive(data,key,data[key])
      })
    }
  }
  defineReactive(obj,key,value){
    // 递归遍历
    this.observe(value)
    const dep = new Dep()
    console.log(Dep.target);
    Object.defineProperty(obj,key,{
      enumerable:true,
      configurable:false,
         get(){
        Dep.target && dep.addSub(Dep.target)
        console.log(Dep.target);
        return value
      },
      //通过箭头函数改变this指向class Observer
      set:(newVal)=>{
        console.log(newVal);
        this.observe(newVal)
        if(newVal !== value){
          console.log(value);
          value =newVal
          
          // 如果新旧值不同,则通知Dep
          dep.notify()
        }
      }

    })
  }
}
class Watcher{
  constructor(vm,expr,cb){
    this.vm=vm,
    this.expr =expr,
    this.cb =cb,
    // 保存旧值
    this.oldVal =this.getOldVal()
  }
  getOldVal(){
    Dep.target = this
    const oldVal = compileUtil.getVal(this.expr,this.vm)
    
    Dep.target = null
    return oldVal
  }
  // 比较旧值和新值，不一样则更新视图
  update(){
    const newVal = compileUtil.getVal(this.expr,this.vm)
    console.log(newVal);
    if(newVal !==this.oldVal){
      this.cb(newVal)
    }
  }
}
class Dep{
  constructor(){
    this.subs = []
  }
  // 收集观察者
  addSub(watcher){
    console.log('1');
    this.subs.push(watcher)
  }
  // 通知观察者去更新
  notify(){
    console.log('观察者',this.subs);
    console.log(this.subs);
    this.subs.forEach(watcher=>watcher.update())
  }
}

