import chalk from "chalk"
import  readline from "readline-sync"


console.log(chalk.blue(`welcome to simple js`));

let fName=  readline.question(chalk.green("what is your name"))
let age = readline.question(chalk.bgBlackBright("how old are you"))
let code = readline.question(chalk.blue("do yo like coding?[y/n]"))


console.log(chalk.bgGray("--------sumarry-----------"));

console.log(`fname ${fName}`);
console.log(`age ${ age}`);
console.log(` like code     yes`);

