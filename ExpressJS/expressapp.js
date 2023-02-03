const express = require('express');
const app = express(); //top level function in express

app.get('/',(req,res)=>{
    res.status(200).send("HomePage")
})                                      //homepage

app.get('/about',(req,res)=>{
    res.status(200).send("About Page is not yet developed")
})                                      //about page
app.all('*',(req,res)=>{
    res.status(404).send("<h1>Page NOT Found</h1>")
})
app.listen(5000,()=>{
    console.log("App is listening on 5000")
})                                          //to start the server

//app.get
//app.post
//app.put
//app.delete
//app.all

