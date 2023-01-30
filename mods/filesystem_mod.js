const {readFileSync,writeFileSync} = require('fs') //destructing the the methods
const first = readFileSync('./Intro/app.js','utf-8'); //reads whats inside the app.js file
console.log(first);
writeFileSync('./result.txt',`hello here i am writing into this file ${first}`)
console.log(readFileSync('./result.txt','utf-8'))

//writeFileSync('./result.txt',`hello here i am writing into this file ${first}`,flag:'a')
//this will append instead of overwriting the file


//1:18:28 for async