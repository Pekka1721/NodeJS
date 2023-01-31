const {readFile,writeFile, read} = require('fs');
readFile('./result.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return
    }
    const first = result;
    readFile() ///creating call back hell
    //next write a writefile func

})
