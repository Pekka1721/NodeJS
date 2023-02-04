//middleware
const express = require('express')
const app = express();


const logger = (req,res,next)=>{            //middle ware
    const method = req.method;
    const url = req.url;
    //const time = new Date().getTime();
    const year = new Date().getFullYear();
    console.log(method,url,year);
    next();                             //it will pass over the control if we dont have it will load
}
app.get('/',logger,(req,res)=>{
    
    res.send('<h1>HOMEPAGE</>')
})

// req ==> middleware ==> response
app.listen(5000,()=>{
    console.log('App started on 5000 port')
})