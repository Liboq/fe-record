/* 
这里需要使用Symbol 来确定该this 是thisArg中的唯一，不会重复 this 为调用call，bind，apply的方法 例如 testBind.say()._myBind() =》 this 为 testBind.say
*/
Function.prototype._myCall = function (thisArg, ...args) {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : Window;
  let fn = Symbol();
  thisArg[fn] = this; //这个this
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
};
Function.prototype._myApply = function (thisArg, args = []) {
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  let fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
};
Function.prototype._myBind = function (thisArg, ...args) {
  console.log(
    this
  ); /*  打印结果： ;ƒ say(prefix, age) {console.log(`${prefix},my name is ${this.name},i am ${age} year old`);} */
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  const fn = Symbol();
  thisArg[fn] = this;
  return function (...innerArgs) {
    return thisArg[fn](...args, ...innerArgs);
  };
};
// test
const testBind = {
  name: "麻不烧",
  say(prefix, age) {
    console.log(`${prefix},my name is ${this.name},i am ${age} year old`);
  },
};

const B = {
  name: "小丁丁",
};

const sayB = testBind.say._myBind(B, "hello");

sayB(3); // 'hello,my name is 小丁丁,i am 3 year old''

const testCall = {
  name: "麻不烧",
  say(prefix, age) {
    console.log(`${prefix},my name is ${this.name},i am ${age} year old`);
  },
};

const A = {
  name: "小丁",
};

testCall.say._myCall(A, "hello", 3); // 'hello,my name is 小丁,i am 3 year old'
