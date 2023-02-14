//problem1:- Registering for the event to be fired only one item using once
//problem2: Create an event emitter instance and register a couple of callback
//problem3: Regsitering for the event with callback parameters

const EventEmitter=require("events");
const event =new EventEmitter();
/*
event.on('TellUrName',()=>{
    console.log("My name is shubham");
})
event.on('TellUrName',()=>{
    console.log("My name is shubham kumar");
})
event.on('TellUrName',()=>{
    console.log("My name is shubham kumar singh");
})
event.emit('TellUrName');
*/

//pro3

event.on("checkPage",(sc,msg)=>{
    console.log(`Status code is ${sc} and the page is ${msg}`)
})
event.emit("checkpage",200,"okkh")