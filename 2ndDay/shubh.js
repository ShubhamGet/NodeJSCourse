const fs=require("fs");
fs.writeFileSync("bio.txt","Hello, MySelf Shubham Kumar Singh ");
fs.appendFileSync("bio.txt","And tell ur name plze");
const data=fs.readFileSync("bio.txt");
newData=data.toString();
console.log(newData);