let arr = [
  { id: 1, name: "部门1", pid: 0 },
  { id: 2, name: "部门2", pid: 1 },
  { id: 3, name: "部门3", pid: 1 },
  { id: 4, name: "部门4", pid: 3 },
  { id: 5, name: "部门5", pid: 4 },
  { id: 6, name: "部门6", pid: 0 },
];
// 我的解法
const listToTree = (rootList, id = 0, list = []) => {
  for (const item in rootList) {
    if (rootList[item].pid === id) {
      list.push(rootList[item]);
      rootList.splice(item, 1);
    }
  }
  for (const i of list) {
    i.children = [];

    const children = rootList.filter((item) => {
      return item.pid === i.id;
    });
    children.forEach((item) => {
      item.children = [];
      const list1 = listToTree(rootList, item.id, list.children);
      item.children.push(...list1);
    });
    i.children.push(...children);
  }
  return list;
};
// 大佬解法思路 时间复杂度为On
const toTree = (arr) => {
  const list = [];
  const hashmap = {};
  for (let i = 0; i < arr.length; i++) {
    let pid = arr[i].pid;
    let id = arr[i].id;
    if (!hashmap[id]) {
      hashmap[id] = { children: [] };
    }
    hashmap[id] = { ...arr[i], children: hashmap[id].children };

    if (pid === 0) {
      list.push(hashmap[id]);
    } else {
      if (!hashmap[pid]) {
        hashmap[pid] = {
          children: [],
        };
      }
      hashmap[pid].children.push(hashmap[id]);
    }
  }
  return list;
};
const result1 = toTree(arr);
console.log(result1);
const result = listToTree(arr);
// console.dir(result);
