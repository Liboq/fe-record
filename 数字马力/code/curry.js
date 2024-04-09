function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        console.log(args);
        return fn.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  }
  
  const add = (a, b, c) => a + b + c;
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(1)(2)(3)); // 输出: 6
  console.log(curriedAdd(1, 2)(3)); // 输出: 6
  console.log(curriedAdd(1)(2, 3)); // 输出: 6
  console.log(curriedAdd(1, 2, 3)); // 输出: 6
  
  