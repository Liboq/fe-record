class Vue{
  constructor(options){
    this.$options = options
    this.$data = options.data
    this.$el = options.el
    this.proxyData(this.$data) 
    new compile(this.$el,this)
  }
  proxyData(data){
    for (const key in data) {
      Object.defineProperty(this,key,{
        enumerable : true,
        configurable : true,
        set: function proxySet(newvalue){
          console.log('set',1111111111);
          data[key]= newvalue
        },
        get:function getProxy(){
          console.log('get',22222222);
          return data[key]
        }
      })
    }
  }
}