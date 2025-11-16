import chalk from "chalk";
import { countReset } from "console";
import os, { platform } from "os";




console.log(chalk.greenBright("\n==================💻SYSTEM INFO==================="));

console.log(chalk.red("\n                     |"));
console.log(chalk.red("                     |"));
console.log(chalk.red("                     |"));
console.log(chalk.red("                     V"));



console.log(chalk.red("\n 📌PLATFORM :", os.platform()));
console.log(chalk.red("📌HOSTNAME :",os.hostname()));
console.log(chalk.red("📌 OS TYPE :",os.type())); 2
console.log(chalk.red("📌 Release :",os.release()))
console.log(chalk.red("📌 Architecture :",os.release()));

console.log(chalk.cyan("\n =================CPU INFO==================="));

console.log(chalk.red("\n                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      V"));

let cpu= os.cpus()
console.log(chalk.magenta("\nCORE :"),cpu.length);

let mod1=os.cpus()[0].model;
console.log(chalk.magenta("MODULE :"),mod1);


console.log(chalk.blue("🪦\n ~~~~~~~~~~~~~~~~~~ MEMORY INFO ~~~~~~~~~~~~~~~~~~~"));

console.log(chalk.red("\n                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      V"));


console.log(" \nTotal memeory :", (os.totalmem()/1024/1024/1024).toFixed(2), "GB");
// console.log(chalk.red("Total Memory:",os.totalmem()/1024/1024/1024).toFixed(2), "GB");
console.log("Feee mremory :",(os.freemem()/1024/1024/1024).toFixed(2), "GB");


console.log(chalk.blue(" \n 🛜 Networ Interfance"));

console.log(chalk.red("\n                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      V"));


// console.log(os.networkInterfaces());
let wifi1=os.networkInterfaces()


console.log(chalk.green("interfance (WI-fi) :"),wifi1.lo[0].address);
console.log(chalk.green("Interface (Lookback Pseudo -Interface 1 :"),wifi1.lo[1].address);
console.log(chalk.green("Interfance(vEthernet (wsl  (Hyper-v firewall)))"),wifi1. eth0[0].address);

console.log("\n⏳ uptime ");
console.log(chalk.red("\n                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      |"));
console.log(chalk.red("                      V"));


// let time=os.uptime()
console.log(chalk.red("UPTIME  (Second)",os.uptime()));

console.log("\n🏚️ Home Directory :",os.homedir());
console.log("📂Tem Directory :",os.tmpdir());
