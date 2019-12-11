/**
 * 数据资源服务器
 */

let express = require('express'),
    app = express()

app.listen(5000, () => {
  console.log('【cors】，数据服务器启动成功，运行在5000端口')
})

// 基于CORS设置允许跨域请求
app.use((req, res, next) => {
  // 允许哪些源可以向这个服务器发送AJAX请求（通配符是 '*'，表示允许所有的源，也可以单独设置某个源，'http://localhost:8000'，这样只允许 http://localhost:8000 的请求）
  // 不使用通配符是为了保证接口和数据的安全，不能让所有的源都能访问。而且一旦设置了允许携带凭证过来，则设置 '*' 通配符会被报错，此时只能设置具体的源！且只能设置一个允许访问的源。
  res.header('Access-Control-Allow-Origin', 'http://localhost:8000')
  // 是否允许跨域的时候携带凭证（例如 cookie 凭证，true 为允许，false 为不允许，设置为 false，客户端和服务器之间不会传递 cookie，这样 session 存储就失效了）（session 之所以有用是因为客户端从 cookie 中取 sid ，即将sid通过 cookie 传递给服务器进行校验）
  // 一般都设置为 true
  res.header('Access-Control-Allow-Credentials', true)
  // 允许的请求头部（哪些头部信息是合法的）
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-Width')
  // 允许的请求方式（一定要有 OPTIONS）
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
  // 设置 OPTIONS 请求目的：我们吧这个请求当做一个试探性请求，当客户端需要向服务器发送请求的时候，首先发送一个 OPTIONS 请求，服务器接受到是 OPTIONS 请求，看一下是否允许跨域，允许返回成功。如果服务器不允许跨域，则客户端会出现跨域请求不允许的错误。如果客户端检测到不允许跨域，则后续的请求都不再进行。 =》 客户端 axios 框架就是这样处理的，自己写的没有写 OPTIONS 请求。
  req.method === 'OPTIONS' ? res.send('CURRENT SERVICES SUPPORT CROSS DOMAIN REQUESTS!') : next()
  // next() 为 express 中间件语法
  next()
})

app.get('/queryInfo', (req, res) => {
  let data = {
    code: 0,
    msg: '非同源数据!'
  }

  // CORS 跨域数据返回
  res.send(data)
})