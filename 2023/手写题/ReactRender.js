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

const render = (el, num = 0) => {
  let template = "";
  let kongString = "";
  for (let i = 0; i < num; i++) {
    kongString += " ";
  }
  if (el.tag) {
    const lower = el.tag.toLowerCase();
    const attrsTemp = renderAttrs(el.attrs);
    const sonTemplate = renderChildren(el.children, num+1);
    template = `${kongString}<${lower}${attrsTemp ? " " + attrsTemp : ""}>${
      sonTemplate ? "\n" : ""
    }`;
    template += sonTemplate + `</${lower}> \n`;
  }
  return template;
};
const renderAttrs = (Attrs) => {
  let template = "";
  for (const attr in Attrs) {
    template += `${attr}="${Attrs[attr]}"`;
  }
  return template;
};
const renderChildren = (children, num) => {
  let kongString = "";
  for (let i = 0; i < num; i++) {
    kongString += " ";
  }
  let childrenTemp = "";
  if (children.length > 1) {
    children.forEach((item) => {
      childrenTemp += kongString+render(item,num+1);
    });
  }
  return childrenTemp;
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
