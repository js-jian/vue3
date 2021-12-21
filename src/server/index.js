const userApi = require("./routes/user")

const bodyParser = require('body-parser');
const express = require("express")
const app = express()

// 经过bodyParser中间件后，就可以在所有路由处理器的req.body中访问请求参数
app.use(bodyParser.json()); // 解析 application/json
app.use(bodyParser.urlencoded({ extended: false })); // 解析 application/x-www-form-urlencoded

app.use("/api/user", userApi)

const port = 9999
const hostname = "127.0.0.1"
app.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}`)
})