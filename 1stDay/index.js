const fs=require("fs");
//fs.writeFileSync("read.txt","Hello Shubham Singh ");
//fs.appendFileSync("read.txt","How r u ?");

//const data=fs.readFileSync('read.txt');
//newdata=data.toString();
//console.log(newdata);

fs.renameSync('read.txt','readwrite.txt');