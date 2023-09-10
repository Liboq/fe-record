const deepClone = (data, map = new WeakMap()) => {
  // 基础类型
  if (typeof data !== "object" || data === null) return data
  // Function Date REG Map Set 执行构造题，返回新的对象
  const constructor = data.constructor
  if (/^(Function|RegExp|Map|Set|Date)$/i.test(constructor.name)) return new constructor(data)
  if (map.get(data)) return map.get(data)
  map.set(data, true)
  const cloneData = Array.isArray(data) ? [] : {}
  for ( key in data) {
    // hasOwnProperty 可以查找自己是否存在某个属性，但是不会查询到原型链上去
    if (Object.hasOwnProperty.call(data,key)) {
      cloneData[key] = deepClone(data[key], map)
    }
  }
  return cloneData
}
// 最简单的深拷贝 JSON.Parse(JSON.stringify data)

let obj = {
  a: 1,
  b: 2,
  c: {
      c: 1,
      d: 2
  }
}
const newobj = deepClone(obj)
console.log(newobj);
newobj.a = 3
obj.b=3
console.log(newobj,obj);