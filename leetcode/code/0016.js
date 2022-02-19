const user = { name: '张三', company: '黑马', department: '长沙校区' };
const tpl = '你好，{{name     }}，欢迎来到{{    company}}·{{ department }}！';
function template(tpl, data) {
	// show your code...
  
  var pattern =/{{(\s*[a-zA-Z]+\s*)}}/
  var result=null;
  while(result=pattern.exec(tpl)){
    tpl=tpl.replace(result[0],data[result[1].trim()])
  }
  console.log(tpl);
  return tpl
}

template(tpl, user); // "你好，张三，欢迎来到黑马·长沙校区！"
