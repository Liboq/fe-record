// 最长子序列上升算法
// const arr = [5,6,1,3,8,9,4]
const lengthOfLTS = (arr) => {
  let array = [arr[0]];
  const position = [0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === -1) {
      continue;
    }
    if (arr[i] > array[array.length - 1]) {
      array.push(arr[i]);
      position.push(array.length - 1);
    } else {
      let l = 0;
      let r = arr.length - 1;
      while (l <= r) {
        let mid = Math.floor((1 + r) / 2);
        if (arr[i] > array[mid]) {
          l = mid + 1;
        } else if (arr[i] < array[mid]) {
          r = mid - 1;
        } else {
          l = mid;
          break;
        }
      }
      array[l] = arr[i];
      position.push(l);
    }
  }
  let cur = array.length - 1;
  for (let i = position.length - 1; i >= 0 && cur >= 0; i--) {
    if ((position[i] = cur)) {
      array[cur--] = i;
    }
  }
  return array;
};
