new Promise((resolve, reject) => {
    console.log(9);
    resolve();
    console.log(1)
})
    .then(() => {
        console.log(2)
    })
new Promise((resolve) => {
    resolve(5)
})
    .then(res => {
        new Promise((resolve) => {
            console.log(res);
            resolve(6)
        })
            .then(res1 => { console.log(res1); })
    })
setTimeout(() => {
    console.log(10);
    new Promise(() => {
        console.log(11)
    })
    setTimeout(() => {
        console.log(14);
    })
})
setTimeout(() => {
    console.log(12);
    new Promise(() => {
        console.log(13)
    })
})
console.log(3)
// 1 3 2 5 6
//  new Promise 是同步任务
// Promise 的.then 方法 是一个 微任务 会在 promise resolve 之后执行
// 流程是这样的 一个 script 相当于是一个宏任务
// 执行到script 的时候 执行这个文件 同步任务先执行 然后执行 微任务队列  清空微任务队列后 执行宏任务队列 一次只能执行一个宏任务
// 例如 上面代码 有两个 setTimeout 在 执行 第一个 setTimeout 的时候 执行了 有微任务 就会执行完这个宏任务中的微任务 再执行下一个宏任务
// 如果宏任务 中 又存在 宏任务 那将这个宏任务 放到 宏任务队列的 末尾 依序执行
// 先进先出原则 执行完一个宏任务 才会去执行下一个宏任务 
// 当微任务队列 执行完 才会执行宏任务 一次只会执行一个宏任务  