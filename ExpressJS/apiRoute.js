const express = require('express');
const app = express();
const {products} =require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1> <a href="/api/products">Products </a>')
})
app.get('/api/products',(req,res)=>{                        //created a special list of products from whole data.js
    const newProducts = products.map((product)=>{
        const{id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);
})
app.listen(5000,()=>{
    console.log('App Started on 5000 port');
})