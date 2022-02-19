let o={
    a:10,
    b:{
        a:12,
        fn:function(){
            console.log(this.a);
            console.log(this);
        }
    }
};
a=5;
let j = o.b.fn;
// 此处调用的函数j()他的this指向window
j();
// 
o.b.fn();