const express = require('express');
const app = express();
const {products} =require('./data');

app.get('/',(req,res)=>{
    res.send('<h1>HomePage</h1> <a href="/api/products">Products </a>')
})
app.get('/api/products/:productId',(req,res)=>{
    // console.log(req);
     console.log(req.params);
    const {productId}= req.params;                          //auto routing using params
   const singleProduct = products.find((product)=>product.id=== Number(productId))

   if(!singleProduct){
    return res.status(404).send('Product Does Not Exists')
   }
    res.json(singleProduct);
})
app.listen(5000,()=>{
    console.log('App Started on 5000 port');
})