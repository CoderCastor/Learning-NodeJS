const express = require("express");

const app = express()


app.get("/",(req,res)=>{
    return res.send("Hi! I'am from Homepage");
})

app.get("/about",(req,res)=>{
    // return res.send("Hey "+req.query.name+"! I'am from about"+"\nyou are "+req.query.age+" old");
    return res.send(`Hey ${req.query.name} !`);  //use ES6
})


// old code
// const http = require('http');
// const myServer = http.createServer(app);
// myServer.listen(8000, ()=>{
//     console.log("Server is started !");  
// })


// new code
app.listen(8000,()=>console.log("Server is started !"))
