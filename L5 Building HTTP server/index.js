const http = require("http");
const fs = require("fs");

//for creating a server take callback fn for processing incoming request
// const myServer = http.createServer((req,res)=>{
//     // console.log("New request Receive");
//     console.log(req);
    
//     res.end("Hello From Server")
// });   

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log , (err,data) => {
        switch(req.url){
            case "/": res.end("Homepage");
            break
            case "/about": res.end("I'm codercastor");
            break
            default: res.end("404 Not Found"); 
        }
        res.end("Hello From Server");
    } )
})

myServer.listen(8000, ()=>{
    console.log("Server started !");
    
})