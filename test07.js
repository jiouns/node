// ejs 的使用
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const hostname = '127.0.0.1';
const port = 3000;

const templement = fs.readFileSync(__dirname + '/test07.ejs', 'utf8');

const server = http.createServer((req, res) =>{
    var data = ejs.render(templement, {
        title: 'hello world!',
        content: "<strong>=== Weto</strong",
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});