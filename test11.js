// 优化 test06.js === 模拟Apache

const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) =>{

    const file = path.join(__dirname, req.url);
    fs.readFile(file, (err, data) =>{
        if(err){
            res.end("404");
        }else{
            res.setHeader('Content-Type',mime.getType(file));
            res.end(data);
        }
    })

}).listen(port, host, () =>{
    console.log(`server running at http://${host}:${port}/`)
});