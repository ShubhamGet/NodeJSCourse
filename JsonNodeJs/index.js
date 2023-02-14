const biodata={
    name:"Shubham",
    age:"25",
    Qualification:"Pursuing MCA",
    channel:"CodeWithConfidance"
}
//console.log(biodata)
//console.log(biodata.Qualification);

// stringify, its get used when we have to convert object in JSON formate 
const jsonData=JSON.stringify(biodata);
console.log(jsonData);
const objData=JSON.parse(jsonData)
console.log(objData);