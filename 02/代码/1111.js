//导入http核心模块
const http= require('http')
//创建server服务器
const server=http.createServer()
//监听函数
server.on('request',(req,res)=>{
    res.end('hell')
})
// server.listen启动服务器
server.listen(3000,'127.0.0.1',()=>{
    console.log('server onrunning at http://127.0.0.1:3000')
})