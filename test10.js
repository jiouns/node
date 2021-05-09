// 读取文件
const fs = require('fs');
fs.readFile('./index.html', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    }else{
        console.log(data);
    }
})