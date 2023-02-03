//creating a app which send a web page to server;
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./ExpressJS'))                              //use this for inner dependices of files to connect like html have css file dump all the files in a single folder
app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})
app.all('*',(req,res)=>{
    res.status(404).send("<h1>404 Error Page Not Found</h1>")
})
app.listen(5000,()=>{
    console.log("Listening on Port 5000");
})