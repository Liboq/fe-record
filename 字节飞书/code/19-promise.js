function Promise(executor) {
  this.status = "pending";
  this.reason = null;
  this.value = null;
  this.onfulfilledList = [];
  this.onRejectedList = [];

  const resolve = (value) => {
    if (value instanceof Promise) {
      return value.then(resolve, reject);
    }
    if (this.status === "pending") {

      setTimeout(() => {
        this.status = "fulfilled";
        this.value = value;
        this.onfulfilledList.forEach((func) => func(value));
      });
    }
  };
  const reject = (reason) => {
    setTimeout(() => {
      this.reason = reason;
      this.status = "rejected";
      this.onRejectedList.forEach((func) => func(reason));
    });
  };
  try {
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}
const resolvePromise = (promise2, result, resolve, reject) => {
  if (result === promise2) {
    return reject(new TypeError("error due to circular reference"));
  }

  if (result instanceof Promise) {
    if (result.status === "pending") {
      result.then(function (data) {
        resolvePromise(promise2, data, resolve, reject);
      }, reject);
    } else {
      result.then(resolve, reject);
    }
    return;
  } else {
    return resolve(result);
  }
};
Promise.prototype.then = function (onfulfilled, onrejected) {

  onfulfilled =
    typeof onfulfilled === "function" ? onfulfilled : (data) => data;
  onrejected =
    typeof onrejected === "function"
      ? onrejected
      : (error) => {
          throw error;
        };
  let promise2;
  if (this.status === "rejected") {
    return promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let result = onrejected(this.reason);
          resolvePromise(promise2, result, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    });
  }
  if (this.status === "fulfilled") {
    return (promise2 = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let result = onfulfilled(this.value);
          resolvePromise(promise2, result, resolve, reject);
        } catch (e) {
          reject(e);
        }
      });
    }));
  }
  if (this.status === "pending") {
    return (promise2 = new Promise((resolve, reject) => {
      this.onfulfilledList.push((value) => {
        try {
          let result = onfulfilled(value);
          resolvePromise(promise2, result, resolve, reject);
        } catch (e) {
          return reject(e);
        }
      });

      this.onRejectedList.push((reason) => {
        try {
          let result = onrejected(reason);
          resolvePromise(promise2, result, resolve, reject);
        } catch (e) {
          return reject(e);
        }
      });
    }));
  }
};
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('lucas')
    }, 2000)
  })
  
  promise.then(data => {
    console.log(data)
    return `${data} next then`
  })
  .then(data => {
    console.log(data)
  })
