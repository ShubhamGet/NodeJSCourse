// create own server
const http=require("http");
const fs=require("fs");
//const { url } = require("inspector");
 const server=http.createServer((req,res)=>{
    //console.log(req,url)
    if(req.url=='/'){
        res.end("Hello from my side ")
    }else if(req.url=='/about'){
        res.end('Hello from other sides from Shubham');
    }
    else if(req.url=='/contact'){
        res.end('Hello from contact side');
    }
    else if(req.url=='/userapi'){
        fs.readFile(`${__dirname}/userAPI/userAPI.json`,"utf-8",(err,data)=>{
           console.log(data)
           //res.end('Hello from API User side');
           res.end(data)
        })
    }
    else{
        res.writeHead(404,{"content-type":"text/html"})
        res.end("<h1>404, error code, page dont find</h1>")
    }
 });
 server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port number 8000")
 });


