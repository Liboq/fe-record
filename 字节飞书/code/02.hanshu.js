var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
// 将 arr2 中的元素插入到 arr1 的开头
// Array.prototype.unshift.apply(arr1, arr2)
 // arr1 现在是 [3, 4, 5, 0, 1, 2]
arr1.unshift(...arr2)
console.log(arr1);