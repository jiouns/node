// 我写你读html
// 知识点：const fs = require('fs')

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) =>{
    fs.readFile(__dirname + '/index.html', 'utf8', (err,data) =>{
        if(err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end("No found");
        }else{
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    })
})

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
})