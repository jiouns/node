const http = require("http");
const host = '127.0.0.1';
const port = 3000;

http.createServer((req, res) =>{
    console.log('请求报文头为：'+ req.headers + '\n');
    console.log('请求原始报文头：' + req.rawHeaders + '\n');
    console.log('请求版本：' + req.httpVersion + '\n');
    console.log('请求方法：' + req.method + '\n');
    console.log('请求路径：' + req.url + '\n');
    res.end('over');
}).listen(port,host,() =>{
    console.log(`server runing at http://${host}:${port}`);
});