const user = { name: '张三', company: '腾讯', department: '深圳总部' };
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

template(tpl, user); //
