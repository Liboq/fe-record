

class MyPromise {
    constructor(fn) {
        this.status = "pedding"
        this.value = undefined
        this.reason = undefined
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        const resolve = (val) => {
            if (this.status === "pedding") {
                this.status = "fulfilled"
                this.value = val
            }

        }
        const reject = (reason) => {
            if (this.status === "pedding") {
                this.status = "rejected"
                this.reason = reason
            }
        }
        try {
            fn(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFulfilled, OnRejected) {
        try {
            if (this.status === "fulfilled") {
                onFulfilled(this.value)
            } else if (this.status === "rejected") {
                OnRejected(this.reason)
            } else {
                this.onFulfilledCallbacks.push(onFulfilled)
                this.onRejectedCallbacks.push(OnRejected)
            }
            return this
        } catch (error) {
            return this
        }
    }
    catch(onRejected) {
        return this.then(null, onRejected)
    }
}
const p = new MyPromise((resolve) => { console.log(666); resolve(777) })
console.dir(p)
console.log(p.then((res) => { console.log(res); }));