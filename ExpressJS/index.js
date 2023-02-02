const http = require('http')
const server = http.createServer((req,res)=>{
    res.write("BuilidingWeb")
    res.end();
})
server.listen(5000);
