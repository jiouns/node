// url 为我指引方向 ---》 主要是 req.url

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    switch(req.url) {
        case '/':
            res.end('hello world');
            break;
        case '/about':
            res.end('This is about page');
            break;
        case '/home':
            res.end('This is a home page');
            break;
        default:
            res.end('This is a default page');
    }
});
server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
});