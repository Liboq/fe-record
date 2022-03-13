Vuex为什么不允许在actions里修改state的值？

首先，resetStoreVM这个函数，它的作用是初始化store，

它首次被执行是在Store的构造函数中

```
function` `resetStoreVM (store, state, hot) {`` ``// ...`` 
``if` `
(store.strict) {`` 
``enableStrictMode(store)``
``}``
// ...``}
他这里会对严格模式进行判断，假如我们启用了严格模式，就会进行下面那个函数
function enableStrictMode (store) {
 store._vm.$watch(function () { return this._data.$$state }, () => {
  if (process.env.NODE_ENV !== 'production') {
   assert(store._committing, `do not mutate vuex store state outside mutation handlers.`)
  }
 }, { deep: true, sync: true })
}
这里会监听数据的变化，数据变化就会assert(断言)，
export function assert (condition, msg) {
 if (!condition) throw new Error(`[vuex] ${msg}`)
}
assert则会判断第一个值是否为真，不为真则会抛出异常
而mutation里的commit方法里的——withCommit(fn)在执行fn前会把this.赋值为true,
actions里
dispatch代码大致如下：


dispatch (_type, _payload) {
  const {
   type,
   payload
  } = unifyObjectStyle(_type, _payload)
 
  const action = { type, payload }
  const entry = this._actions[type]
 
 // ...
  const result = entry.length > 1
   ? Promise.all(entry.map(handler => handler(payload)))
   : entry[0](payload)
 // ...
 }
 
 如果回调函数的数量大于一的时候则会调用Promise.all()方法，我们知道的是，Promise.all没有顺序保证的，，如果在不同的函数里改变同一个state，则会乱套
 actions采用promise.all 可以以最大限度进行异步操作并发
```

学习https://www.cnblogs.com/coderwhytop/p/15908381.html