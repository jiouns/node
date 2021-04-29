const http = require('http');
const config = require('./test03').config; //引用test03.js

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("hello node.js world !");
});

server.listen(config.port,config.hostname, () =>{
    console.log(`Server running at http://${config.hostname}:${config.port}/`);
});