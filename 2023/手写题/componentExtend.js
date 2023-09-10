// 寄生组合式继承
function Parent(name) {
  this.name = name
}
Parent.prototype.getName = function () {
  return this.name
}
function Son(name, age) {
  Parent.call(this, name)
  this.age = age
}
Son.prototype.getAge = function () {
  return this.age
}
/* 
将指定对象的原型设置为另一个对象的原型
Reflect.setPrototypeOf= (obj,proto)=>{
  obj.__proto__ = proto
  return obj
}
*/
Reflect.setPrototypeOf(Son, Parent)
Reflect.setPrototypeOf(Son.prototype, Parent.prototype)
const son = new Son('zs', 'ls')
const age = son.getAge()
const name1 = son.getName()
console.log(age, name1);