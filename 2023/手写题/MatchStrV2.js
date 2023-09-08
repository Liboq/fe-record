// eval 解析并执行传递给它的字符串作为 JavaScript 代码
// 使用eval 模拟解决 模板字符串
var data = {
  name: "小明",
  age: 16,
  school: "第三中学",
  classroom: "教室2",
};
String.prototype._matchStrV2 = function () {
  return this.replace(/\${[.\s\S]*?}/g, (match, i) => {
    if ((match = match.substring(2, match.length - 2).trim()) == "") {
      return "";
    } else if (!data[match]) {
      return eval(match.substring(0, match.length));
    } else {
      return data[match];
    }
  });
};

let cases =
  "${ name } 今年 ${ age } 岁，就读于 ${ school } 今天在 ${ classroom } 上课，${ name } ${ data.age >= 18 ? '成年了' : '未成年' }";
// cases._matchStrV2()
console.log(cases._matchStrV2());
// console.log(eval("data.age >= 18 ? '成年了' : '未成年'")); //未成年
