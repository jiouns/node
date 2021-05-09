// 读取文件
const fs = require('fs');
// fs.readFile('./index.html', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

fs.readFile(__dirname +'/index.html', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
    }else{
        console.log(data);
    }
});
// 当前文件的路径
console.log(__dirname);
//当前文件的完整路径
console.log(__filename);