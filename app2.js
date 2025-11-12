import chalk from "chalk"
import  readline from "readline-sync"

console.log(chalk.red("=============================="));
console.log(chalk.red("instagram log in page"));
console.log(chalk.red("=============================="));



 

let username = readline.question(chalk.bgBlue("enetr user "));
const password = readline.question(chalk.bgGray("enter your password:"),{hideEchoBack:true,})
console.log("cheacking creadintals");

if(username=="zoheb" && password ==="12345"){
    console.log("login successful");
    console.log(`welcome back,  ${username}`);
}else{
    console.log("login faild");
    console.log("in correct password");
}

console.log("\n thanyou for using instagram");