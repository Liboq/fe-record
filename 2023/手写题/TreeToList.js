// example
const data = [
  {
    id: 1,
    text: "节点1",
    parentId: 0,
    children: [
      {
        id: 2,
        text: "节点1_1",
        parentId: 1,
      },
    ],
  },
];
// 不保留原始数据
const treeToList = (data) => {
  const arr = [];
  data.forEach((item) => {
    if (item.children) {
      arr.push(...treeToList(item.children));
      delete item.children;
    }
    arr.push(item);
  });
  return arr;
};
// 保留原始数据
const treeToList1 = (data) => {
  if (!Array.from(data) && data.length === 0) {
    return;
  }
  return data.reduce((prev, cur) => {
    const { children } = cur;
    return Array.from(children) && children.length > 0
      ? prev.concat(treeToList(children), cur)
      : prev.concat(cur);
  }, []);
};
const list = treeToList1(data);
console.log(list);
