/**
 * 静态资源服务器
 */

let express = require('express'),
    app = express()
    request = require('request')

app.listen(9000, () => {
  console.log('静态资源服务器启动成功，运行在9000端口')
})

app.get('/queryInfo', (req, res) => {
  request('http://localhost:5000/queryInfo', (err, response, body) => {
    res.send(body)
  })
})

app.use(express.static('./static')) // 基于 9000 这个 web 服务把 static 文件加中的内容作为静态资源管理的文件，以后直接访问：http://localhost:9000/xxx.html