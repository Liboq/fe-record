/* 
{
  tag: 'DIV',
  attrs:{
  id:'app'
  },
  children: [
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] }
      ]
    },
    {
      tag: 'SPAN',
      children: [
        { tag: 'A', children: [] },
        { tag: 'A', children: [] }
      ]
    }
  ]
}
把上诉虚拟Dom转化成下方真实Dom
<div id="app">
  <span>
    <a></a>
  </span>
  <span>
    <a></a>
    <a></a>
  </span>
</div>
*/
// 浏览器环境
const render = (el) => {
  const element = document.createElement(el.tag.toLowerCase());
  if (el.attrs) {
    for (const attr in el.attrs) {
      element.setAttribute(attr, el.attrs[attr]);
    }
  }
  if (el.children) {
    el.children.forEach((child) => {
      element.appendChild(elRender(child));
    });
  }
  return element;
};
const example = {
  tag: "DIV",
  attrs: {
    id: "app",
  },
  children: [
    {
      tag: "SPAN",
      children: [{ tag: "A", children: [] }],
    },
    {
      tag: "SPAN",
      children: [
        { tag: "A", children: [] },
        { tag: "A", children: [] },
      ],
    },
  ],
};
const test = render(example);
console.log(test);
