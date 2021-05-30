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

// response 常用对象

http.createServer((req, res) =>{
    // res.setHeader('Content-Type', 'application/json')，设置报文头
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    //  设置 http 响应状态码
    res.statusCode = 404;
    // 响应状态码信息
    res.statusMessage = 'No found';

    // 直接向服务器写入报文头

    res.writeHead(404, "not found", { 'Content-Type': 'text/plain'
});

    res.write("hello world!!! 你好，世界！！！");
    res.end();
}).listen(port, host, () =>{
    console.log(`server runing at http://${host}:${port}` );
})
