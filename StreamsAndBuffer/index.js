const fs=require("fs")
const http=require("http");

const server=http.createServer();

/*
server.on('request',(req,res)=>{
  var fs=require("fs");
  fs.readFile("input.txt",function(err,data){
    if(err) return console.error(err);
    console.log(data.toString());
  })
})
*/

/*
server.on('request',(req,res)=>{
   const rstream=fs.createReadStream('input.txt');
   rstream.on('data',(chunkdata)=>{
       res.write(chunkdata);
   })
   rstream.on('end',()=>{
    res.end();
   });
   rstream.on('error',()=>{
    console.log(error);
    res.end("file not found ")
   })
  });
*/

//second way to the previous work in same manner

server.on('request',(req,res)=>{
const rstream=fs.createReadStream('input.txt');
rstream.pipe(res)

})
server.listen(8000,"127.0.0.1");