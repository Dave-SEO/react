const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/data');
console.log(mongoose);
var Schema=mongoose.Schema;
//定义一个Schema
var ArticlesSchema=new Schema({
    id:{type:Number},
    title:{type:String},
    genre:{type:Number},
    source:{type:String},
    praise_count:{type:Number},
    comment_count:{type:Number},
    publish_time:{type:Date},
    banner_pic:{type:String}
});
app.get('/',(req,res)=>{
    res.send('<h1>12233<h1>')
});
app.listen('9093',()=>{
    console.log('listen 9093');
});