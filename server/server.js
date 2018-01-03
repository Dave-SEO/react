const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send('<h1>12233<h1>')
});
app.listen('9093',()=>{
    console.log('listen 9093');
});