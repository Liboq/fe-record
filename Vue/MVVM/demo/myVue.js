class myVue{
  constructor(options){
    this.$el = options.el,
    this.$options = options,
    this.$data = options.data 
    // console.log(options)
    if(this.$el){
      new Observer(this.$data)
      new Compile(this.$el,this)
      this.proxyData(this.$data)
      
    }
  }
  proxyData(data){
    for(const key in data){
      Object.defineProperty(this,key,{
        get(){
          console.log('get');

          return data[key]
        },
        set(newValue){
          console.log('set');
          data[key]=newValue
        }
      })
    }
  }
}