/**
 * 得到一个新的Promise，该Promise的状态取决于proms的执行
 * proms是一个迭代器，包含多个Promise
 * 全部Promise成功，返回的Promise才成功，数据为所有Primsise成功的数据，并且顺序时按照传入的顺序排列
 * 只要有一个Promise失败，则=返回的Pormise失败，原因是第一个Promise失败的原因
 * @param {iterator} Arr
 */
Promise.prototype._all = function (Arr) {
  return new Promise((resolve, reject) => {
    try {
      const results = []; //完成的任务
      let count = 0; // 总数
      let fulfilledCount = 0; //完成的数量
      for (const P of Arr) {
        // 思考：如何知道啥时候promise全部完成
        let i = count; //保存当前下标
        count++;

        Promise.resolve(P).then((data) => {
            // 成功 fulfilledCount +1
          fulfilledCount++;
          results[i] = data;
          if (fulfilledCount === count) {
            console.log("全部完成");
            resolve(results);
          }
        }, reject);
      }
      if (count === 0) {
        resolve(results);
      }
    } catch (error) {
      reject(error);
      console.error(error);
    }
  });
};
const test = () =>
  Promise.prototype
    ._all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), 4])
    .then(
      (data) => {
        // data:[1,2,3,4]
        // 传递[pro1,pro2,pro3,4]的话:内部默认处理Promise.resolve(4)
        console.log("成功", data);
      },
      (reason) => {
        // reason:reason2
        console.log("失败", reason);
      }
    );
test();
