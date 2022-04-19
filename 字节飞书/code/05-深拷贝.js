// 1.最简单的深拷贝
// JSON.parse(JSON.stringify());
// 
// 2.考虑arr和object
function deepClone(target) {
  if (typeof target === 'object' && target !== null) {
    let cloneTarget = Array.isArray(target) ? [] : {}
    for (const key in target) {
      cloneTarget[key] = deepClone(target[key])

    }
    return cloneTarget
  } else {
    return target
  }
}



// 3.考虑性能影响
// 由于 for in 的效率太差了，相对于for in来说， for循环遍历和while循环更好
// 所以用while来提高他的性能，上面的方法如果target他自己有他自己的话，会导致栈溢出，使用Map来判断有无克隆的对象

function forEach(arr, iteratee) {
  let index = -1
  let len = arr.length
  while (++index < len) {
    iteratee(arr[index], index)
  }
}
function deepClone1(target, map = new Map()) {
  if (typeof target === 'object') {
    let isArray = Array.isArray(target)
    let cloneTarget = isArray ? [] : {}
    if (map.get(target)) {
      return map.get(target)
    }
    map.set(target, cloneTarget)
    const keys = isArray ? undefined : Object.keys(target)
    forEach(keys | target, (value, key) => {
      if (keys) {
        key = value
      }
      cloneTarget[key] = deepClone1(target[key], map)
    })
    return cloneTarget
  }
  else {
    return target
  }

}