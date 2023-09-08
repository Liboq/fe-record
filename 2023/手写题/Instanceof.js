// 原型链上查询
const Instanceof = (left, right) => {
  if (!left) return;
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
};
function Person() {}
var p = new Person();
const a = []
console.log(Instanceof(p, Person));
