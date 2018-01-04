const express = require('express');
const app = express();
const mongoose = require('mongoose');
// 链接MongoDB
mongoose.connect('mongodb://localhost:27017/react');

// 是否链接成功
mongoose.connection.on('connected', function () {
    console.log('mongoDB connect success !');
});
// 类似mysql的表 mongo有文档，字段的概念 新建模型
const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))
// 新增数据
User.create({
    user: 'imooc',
    age: 18
}, function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
// 查询
app.get('/data', (req, res) => {
    //findOne 查找一条
    User.find({'user':'imooc'},(error,data)=>{
        res.json(data);
    });
});
// //删除
// User.remove({age:18},(error,data)=>{
//     console.log(data);
// });

// 更新
User.update({'user':'xiaoming'},{'$set':{age:26}},(error,data)=>{
    console.log(data);
});
app.listen('9093', () => {
    console.log('listen 9093');
});