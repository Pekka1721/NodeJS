const {writeFileSync} = require('fs');
for(i=1;i<10000;i++){
    writeFileSync('./HTTP/Numbers.txt',`Hello World ${i} \n`,{flag:'a'});
}