//sending json data usign express
const express = require('express');
const app = express();
const {products} =require('./data');

app.get('/',(req,res)=>{
    res.json(products);
})

app.listen(5000,()=>{
    console.log('App Started on 5000 port');
})