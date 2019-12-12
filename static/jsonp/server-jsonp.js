/**
 * 数据资源服务器
 */

let express = require('express'),
    app = express()

app.listen(5000, () => {
  console.log('【JSONP】，数据服务器启动成功，运行在5000端口')
})

app.get('/queryInfo', (req, res) => {
  let data = {
    code: 0,
    msg: '非同源数据!'
  }
  
  // JSONP 跨域数据返回
  let fn = req.query.callback // 获取客户端传递的函数名，注意，此处 callback 要与前端协商设置
  res.send(`${fn}(${JSON.stringify(data)})`) // 返回指定格式的内容，函数名(数据) 这种格式
})