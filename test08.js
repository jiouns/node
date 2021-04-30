const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const qs = require('querystring');//处理表单字符串

const hostname = '127.0.0.1';
const port = 3000;
const template = fs.readFileSync(__dirname + '/test08.ejs', 'utf8');
var posts = [];

const server = http.createServer((req, res) =>{
    if(req.method ==='POST'){
        req.data = '';
        req.on("readable", () =>{
            var chr = req.read();
            if(chr){
                req.data += chr;
            }
        });
        req.on('end', () => {
            var query = qs.parse(req.data);
            posts.push(query.content);
            showForms(posts, res);
        });
    }else {
        showForms(posts, res);
    }    
});

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})

function showForms(p_post, res){
    var data = ejs.render(template, {
        title: 'ejs',
        posts: p_post,
    });
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    res.end(data);
}