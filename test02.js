const http = require('http');//调用 node.js 里的 http 模块
const hostname = '127.0.0.1'; //主机名
const port = 3000; // 端口

const server = http.createServer((req,res) =>{ // 调用 node.js  server 模块
    res.statusCode = 200; //状态码 200 -- 成功
    res.setHeader('Content-Type','text/plain'); //设置文本类型
    res.end('hello world!\n'); 
});
server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}/`);
});