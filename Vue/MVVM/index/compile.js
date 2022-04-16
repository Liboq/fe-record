class compile{
  constructor(el,vm){
    this.el = this.isElementNode(el)?el:document.querySelector(el)    
    this.vm = vm
    const fragment = this.creatNode2Fragment(this.el)
    this.compile(fragment)
  }
  isElementNode(node){
    // console.log(node);
    return node.nodeType === 1
  }
  // 创建文档碎片流
  creatNode2Fragment(node){
    const fragment = document.createDocumentFragment()
    console.log(fragment);
    let firstChild 
    while(firstChild = node.firstChild){
      fragment.appendChild(firstChild)
    }
    console.log(fragment);
    return fragment
  }
  compile(fragment){
    // console.log(fragment.childNodes,1111);
    const childNodes = fragment.childNodes;
    [...childNodes].forEach(child=>{
      
      if(this.isElementNode(child)){
        // console.log(child);
        this.compileElement(child)
      }
    })
  }
  compileElement(node){
    const attributes = node.attributes;
    // console.log(attributes);
    [...attributes].forEach(attr=>{
      const {name,value} = attr
      if(this.isDirective(name)){
        const [,directive] = name.split('-')
        const [dirName,eventName] = directive.split(':')
        compileUtil[dirName](node,value,this.vm,eventName)
      }else if(this.isElementName(name)){
        let [,eventName] = name.split('@')
        compileUtil['on'](node,value,this.vm,eventName)
      }
    })
  }
  isDirective(attrName){
    return attrName.startsWith('v-')
  }
}
const compileUtil = {
  
}