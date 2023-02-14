const fs=require("fs")
const biodata={
    name:"Shubham",
    age:"25",
    Qualification:"Pursuing MCA",
    channel:"CodeWithConfidance"
}
// convert to json formate of biodata
const jsonData=JSON.stringify(biodata);
fs.writeFile('json1.json',jsonData,(err)=>{
  console.log("Done")
})

// read json file 

fs.readFile("json1.json","UTF-8",(err,data)=>{
    //console.log(data)
    // convert json data into object formate

    const obData=JSON.parse(data)
    console.log(obData)
})

