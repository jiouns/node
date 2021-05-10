// 读取文件
const fs = require('fs');
// fs.readFile('./index.html', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.readFile(__dirname +'/index.html', 'utf8', (err, data) => {
//     if(err) {
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// });
// // 当前文件的路径
// console.log(__dirname);
// //当前文件的完整路径
// console.log(__filename);

// 解决不同操作系统的兼容性问题，在 macos中路径斜杠为/； windows为\\
// 加载 path 模块
const path = require('path');
fs.readFile(path.join(__dirname, 'index.html'), 'utf8', (err, data) => {
    if(err) {
                console.log(err);
            }else{
                console.log(data);
            }
})