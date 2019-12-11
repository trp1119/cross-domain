const path = require('path')
const htmlWebpackPlugins = require('html-webpack-plugin')

module.exports = {
  // 输入路径配置
  entry: path.resolve(__dirname, './src/index.js'),
  // 输出文件名和路径配置
  output: {
    filename: 'js/main.js',
    path: path.resolve(__dirname, './dist')
  },
  // 引入插件配置
  plugins: [
    new htmlWebpackPlugins({
      // 输出文件名
      filename: 'index.html',
      // 所引用模板文件位置
      template: './src/index.html',
      // js 文件插入的位置
      inject: 'body'
    }),
  ],
  // 文件类型转换配置
  module: {},
  devServer: {
    proxy: {
      // "/queryInfo": "http://localhost:5000"
      '/queryInfo': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
}




// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'index.js',
//     path: path.resolve(__dirname, 'build')
//   },
  // devServer: {
  //   port: 3000,
  //   contentBase: './build',
  //   proxy: {
  //     '/': {
  //       target: 'http://localhost:5000',
  //       changeOrigin: true
  //     }
  //   }
  // }
// }