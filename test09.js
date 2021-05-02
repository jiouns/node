// 调用 mongodb 之前，需要安装 mongodb --- npm i mongodb
// 调用 mongodb 模块 窗口
const mongodbClient = require('mongodb').MongoClient;
// 调用 断言 模块
const assert = require('assert');
// 连接 mongodb 数据库 地址
const url = 'mongodb://localhost:8080';
// 数据库名称
const dbName = 'mongodb';

// 数据库连接
mongodbClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("connect successful to server");
    const db = client.db(dbName);
    client.close();
})

