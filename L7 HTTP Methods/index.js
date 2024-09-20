const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req,res)=>{

    //for ignoring favicon entry
    if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.method} ${req.url} New_Req_Received\n`;

    //writing about url
    const myUrl = url.parse(req.url, true)   //this true separates the parameters into objects
    // console.log(myUrl);
    

    fs.appendFile("output.txt",log, (err)=>{
        
       let msg; 
        switch(myUrl.pathname){
            case "/": 
                msg = "Homepage"
                break;

            case "/about": 
                const username = myUrl.query.username;
                msg = `Hello! ${username}`;
                break;

            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here are your results for " + search);
                break;

            case "/signup":
                if(req.method === "GET") msg='This is a signup form';
                else if (req.method === "POST"){
                    //DB Query
                    msg = "Success";
                }

            default: msg = "404 Not Found"; 
           
        }
        res.end(msg);

    })

})

myServer.listen(8000, ()=>{
    console.log("Server is started !");
    
})
