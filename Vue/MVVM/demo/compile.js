class Compile{
  constructor(el,vm){
    // 判断是否为元素节点，如果不是就query
    this.el = this.isElementNode(el)? el :document.querySelector(el)
    this.vm = vm
    // 1.获取文档碎片对象，放入内存中，减少页面的回流和重绘
    const fragment = this.node2Fragment(this.el)
    //2. 编译模板
    this.compile(fragment)
    //3. 追加子元素到根元素
    this.el.appendChild(fragment)

  }
  // 判断是否为元素节点，直接判断nodeType 是否等于1 即可 (nodeType 元素element ———>1)
  isElementNode(node){
    return node.nodeType === 1
  }
  node2Fragment(el){
    //创建文档碎片流
    const fragment = document.createDocumentFragment()
    let firstChild 
    while(firstChild = el.firstChild){
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  compile(fragment){
    const childNodes  = fragment.childNodes;
    [...childNodes].forEach(child=>{
      if(this.isElementNode(child)){
        this.compileElement(child)
      }else{
        this.compileText(child)
      }
      if(child.childNodes && child.childNodes.length){
        this.compile(child)
      }
    })
  }
  compileElement(node) {
    const attributes = node.attributes;
    [...attributes].forEach(attr =>{
      const {name,value} = attr;
      if(this.isDirective(name)){
        const [,directive] = name.split('-') //text,html,model,on
        const [dirName,eventName] = directive.split(':')//text html model on
        //更新数据，数据驱动视图
        compileUtil[dirName](node,value,this.vm,eventName)
      }else if(this.isElementName(name)){
        let [,eventName] = name.split('@')
        compileUtil['on'](node,value,this.vm,eventName)
      }
    })
  }
  compileText(node){
    const content = node.textContent
    if(/\{\{(.+?)\}\}/.test(content)){
      compileUtil['text'](node,content,this.vm)
    }
  }
  isDirective(attrName){
    return attrName.startsWith('v-')
  }
  isElementName(attrName){
    return attrName.startsWith('@')
  }

}
const compileUtil ={
  getVal(expr,vm){
    return expr.split('.').reduce((data,currentVal)=>{
      // console.log(data);
    return data[currentVal]
    },vm.$data)
  },
  setVal(expr,vm,inputVal){
    return expr.split('.').reduce((data,currentVal)=>{
      data[currentVal]  = inputVal
    },vm.$data)
  },
  getContentVal(expr,vm){
    return expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
      return this.getVal(args[1],vm)
    })
  },
  text(node,expr,vm){
    let value;
    if(expr.indexOf('{{')!== -1){
      value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
        //绑定watcher更新视图
        new Watcher(vm,args[1],()=>{
          this.updater.textUpdater(node,this.getContentVal(expr,vm))
        })
        return this.getVal(args[1],vm)
      })
    }else{
      value = this.getVal(expr,vm)
      new Watcher(vm,expr,(newVal)=>{
        this.updater.textUpdater(node,newVal)
      })
    }
    this.updater.textUpdater(node,value)
  },
  html(node,expr,vm){
    const value = this.getVal(expr,vm)
    new Watcher(vm,expr,(newVal)=>{
      
      this.updater.htmlUpdater(node,newVal)
    })
    this.updater.htmlUpdater(node,value)
  },
  model(node,expr,vm){
    let value = this.getVal(expr,vm)
    new Watcher(vm,expr,(newVal)=>{
      console.log(newVal);
      this.updater.modelUpdater(node,newVal)
    })
    node.addEventListener('input',(e)=>{
      var newVal = e.target.value
      if(value === newVal) return //
      this.setVal(expr,vm,newVal)
      value = newVal
    })
    this.updater.modelUpdater(node,value)
  },
  on(node,expr,vm,eventName){
    let fn = vm.$options.methods && vm.$options.methods[expr]
    node.addEventListener(eventName,fn.bind(vm),false)
  },
  bind(node,expr,vm,attrName){
    let attrVal = this.getVal(expr,vm)
    this.updater.attrUpdater(node,attrName,attrVal)
    
  },
  updater:{
    textUpdater(node,value){
      node.textContent = value
    },
    htmlUpdater(node,value){
      node.innerHTML = value
    },
    modelUpdater(node,value){
      node.value = value
    },
    attrUpdater(node,attrName,attrVal){
      node.setAttribute(attrName,attrVal)
    }
  }
}