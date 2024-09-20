//blocking operations is Synchronous task and nonBlocking requests are Asynchronous task

const fs = require("fs");
const os = require("os");


//Sync.. call  ---Blocking
// fs.writeFileSync('./test.txt','Hey threre!');

//Async call  ---nonBlocking
// fs.writeFile("./test.txt","Hello World Async",(err)=>{});


// console.log(os.cpus().length); //for finding out how many cores are there in machine



