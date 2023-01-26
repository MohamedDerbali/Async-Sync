const fs = require("fs");
//Mode async
fs.readFile("./hello.txt",{ encoding: 'utf8' }, (err, content)=>{
console.log(content);
})
//Mode sync
const content = fs.readFileSync("./hello.txt",{ encoding: 'utf8' });
console.log(content);
console.log("hello app");