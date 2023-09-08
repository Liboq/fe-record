
const LodashGet = (obj,path,error="undefined")=>{
    let newPath = []
    if(Array.isArray(path)){
        newPath = path
    }else{
        newPath = path.replace(/\[/g,'.').replace(/\]/g,'').split('.');
    }
    return newPath.reduce((pre,cur)=>{
        return (pre || {})[cur]        
    },obj)||error
}
var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
console.log(LodashGet(object, 'a[0].b.c'));;
// => 3
 
console.log(LodashGet(object, ['a', '0', 'b', 'c']));;
// => 3
 
console.log(LodashGet(object, 'a.b.c', 'default'));;
// => 'default'