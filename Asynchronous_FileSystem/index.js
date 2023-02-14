// how can we create a file in Asynchronous way,
// like wise below lines, that's how, we can create a file in Asynchronous way
// it's also know as callback function


const fs=require("fs")
/*
fs.writeFile("read.txt","I will try my lavel best today !", (err)=>{
  console.log("File is created");
  console.log(null)
})


fs.appendFile("read.txt"," By All means ",(err)=>{
    console.log("Okk ")
})
*/

fs.readFile("read.txt","UTF-8",(err, data)=>{
console.log(data);
})