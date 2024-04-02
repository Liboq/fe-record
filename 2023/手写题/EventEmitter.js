class EventEmitter {
  // 1- on和once 注册并存储函数
  // 2- emit 找到并执行相应的函数
  // 3- off 找到并删除相应的函数
  // 4- on和once on绑定的事件可以多次执行，除非off; once绑定的函数emit一次即删除，也可以未执行而被off;所以需要在数据结构中标明on、once
  // 5- 事件是有序的，有执行先后顺序
  constructor() {
    // key: 事件名字
    // value: callback[]回调数组
    this.events = {}
  }
  // 绑定函数 多次触发
  on(type, fn, isOnce) {
    const events = this.events
    if (events[type] == null) {
      events[type] = []
    }
    events[type].push({ fn, isOnce })
  }
  once(type, fn) {
    this.on(type, fn, true)
  }
  // 解绑事件
  off(type, fn) {
    if (!fn) {
      this.events[type] = []
    }
    else {
      // 解绑单个fn
      const typeFnList = this.events[type]
      if (typeFnList) {
        this.events[type] = typeFnList.filter((typeFn) => {
          return typeFn.fn != fn
        })
      }
    }
  }
  emit(type, ...args) {
    const typeFnList = this.events[type]
    if (typeFnList == null) return
    this.events[type] = typeFnList.filter(typeFn => {
      const { fn, isOnce } = typeFn
      fn(...args)
      if (!isOnce) {
        return true
      }
      else {
        return false
      }
    })
  }

}
const e = new EventEmitter();

function fn1(a, b) {
  console.log("fn1", a, b);
}
function fn2(a, b) {
  console.log("fn2", a, b);
}
function fn3(a, b) {
  console.log("fn3", a, b);
}

e.on("key1", fn1);
e.on("key1", fn2);
e.once("key1", fn3); // 只会被触发一次
e.on("key2", fn3);

e.emit("key1", 10, 20); // 触发 fn1、fn2、fn3
e.emit("key1", 11, 22); // 触发 fn1、fn2

e.off("key1", fn1); // 解绑 fn1

e.emit("key1", 100, 200); // 触发 fn2
