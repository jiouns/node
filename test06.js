// 我写你读html
// 知识点：const fs = require('fs')

const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const path = require('path');
const port = 3000;

const server = http.createServer((req, res) =>{
    // fs.readFile(__dirname + '/index.html', 'utf8', (err,data) =>{
    //     if(err) {
    //         res.statusCode = 404;
    //         res.setHeader('Content-Type', 'text/html');
    //         res.end("No found");
    //     }else{
    //         res.statusCode = 200;
    //         res.setHeader('Content-Type', 'text/html');
    //         res.end(data);
    //     }
    // });
    // fs.writeFile(path.join(__dirname + '001.jpg'), 'utf8', (err, data) =>{
    //     if(err) {
    //         throw err;
    //     }else{
    //         res.setHeader('Content-Type', 'image/jpg');
    //         res.end(data);
    //     }
    // })
    if(req.url === '/index.html' || req.url === '/'){
        fs.readFile(path.join(__dirname,'index.html'),(err, data) =>{
            if(err) {
                throw err;
            }else{
                res.setHeader('Content-Type', 'text/html;charset=utf8');
                res.end(data);
            }
        })
    }else if(req.url === '/001.jpg'){
        fs.readFile(path.join(__dirname, '001.jpg'),(err, data) =>{
            if(err){
                throw err;
            }else{
                res.setHeader('Content-Type', 'image/jpeg');
                res.end(data);
            }
        })
    }else{
        res.end("not found");
    }
})

server.listen(port, hostname, () =>{
    console.log(`server running at http://${hostname}:${port}`);
})