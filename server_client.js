/**
 * 后台服务器
 */

let express = require('express'),
    app = express()

app.listen(8000, () => {
  console.log('后台服务器启动成功，运行在8000端口')
})

app.get('/queryInfo', (req, res) => {
  res.send({
    code: 0,
    msg: 'my name is zhufeng!'
  })
})


app.use(express.static('./static')) // 基于 8000 这个 web 服务把 static 文件加中的内容作为静态资源管理的文件，以后直接访问：http://localhost:8000/xxx.html