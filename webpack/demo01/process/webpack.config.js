const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
/* 运行 npm run build 对应package.json的“script”
npm run build
process.env.NODE_ENV= prod
argv.mode= production
 */
console.log('process.evn.NODE_ENV=',process.env.NODE_ENV);
const config={
  mode:'development',//模式
  entry:'./src/index.js',//打包入口地址
  output:{
    filename:'bundle.js',//输出文件名
    path:path.join(__dirname,'dist')
  },
  module:{
    rules:[{ //转换规则
      test: /\.css$/, //匹配所有的css文件
      use:'css-loader' //use:对应的loader名称 
      //loader就是将webpacck不认识的内容转换为认识的东西,而webpack默认支持处理js和json文件，其他类型都处理不了，必须借助loader来对不同类型的文件进行处理
    }
    ]
  },
  //插件 与loader 转换特定类型的文件不同，插件（plugins)可以贯穿webpack打包的生命周期，执行不同的任务
  plugins:[ //配置插件
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    }),
    new CleanWebpackPlugin() //引入打包前把打包目录清空的插件
  ],

}
module.exports=(env,argv)=>{

  console.log('argv.mode=',argv.mode);
  return config
}