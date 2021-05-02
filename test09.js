// // 调用 mongodb 之前，需要安装 mongodb --- npm i mongodb
// // 调用 mongodb 模块 窗口
// const mongodbClient = require('mongodb').MongoClient;
// // 调用 断言 模块
// const assert = require('assert');
// // 连接 mongodb 数据库 地址
// const url = 'mongodb://localhost:8080';
// // 数据库名称
// const dbName = 'mongodb';

// // 数据库连接
// mongodbClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("connect successful to server");
//     const db = client.db(dbName);
//     client.close();
// })

// 由于大部分人是使用 mysql，如下代码为 node 连接 mysql

const mysql = require('mysql');
const hostname = 'localhost';
const user = 'root';
const passwd = '132454zlx';
const database = 'smbms';

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'132454zlx',
    database:'smbms'
});
connection.connect();//连接

var sql = "select * from smbms_user ";
connection.query(sql,function(err,rows,fields){
     if(err)
         console.log(err);
     else{
        console.log(rows);
     }
//记得关闭连接
　　 connection.end();
});




