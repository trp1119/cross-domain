/**
 * 客户端服务器（静态资源服务器）
 */

let express = require('express'),
    app = express()

app.listen(8000, () => {
  console.log('客户端服务器（静态资源服务器）启动成功，运行在8000端口')
})

app.get('/queryInfo', (req, res) => {
  res.send({
    code: 0,
    msg: '同源数据！'
  })
})


app.use(express.static('./static')) // 基于 8000 这个 web 服务把 static 文件加中的内容作为静态资源管理的文件，以后直接访问：http://localhost:8000/xxx.html