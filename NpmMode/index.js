/*
const chalk=require("chalk");
console.log(chalk.blue("Hello World"))
*/
const { default: chalk } = require("chalk");
const validator=require("validator")
const res=validator.isEmail('www.shubhamsingh@gmail.com');
console.log(res? chalk.green.inverse(res): chalk.red.inverse(res));