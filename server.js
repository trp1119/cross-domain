/**
 * 数据资源服务器
 */

let express = require('express'),
    app = express()

app.listen(5000, () => {
  console.log('数据服务器启动成功，运行在5000端口')
})

app.get('/queryInfo', (req, res) => {
  let data = {
    code: 0,
    msg: '非同源数据!'
  }
  // 普通返回数据
  res.send(data)

  app.use(express.static('./static'))
})