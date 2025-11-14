// the  os program 
import chalk from "chalk";
import { countReset } from "console";
import os, { platform } from "os";

console.log(chalk.green( "\n 💻 SYSTEM INFO CLI TOOL"));
console.log(chalk.blue("==================================================="));

console.log("📌\n Platform :",os.platform());
console.log("📌 HOSTNAME :",os.hostname());
console.log("📌 OS TYPE  :",os.type() );
console.log("📌 Release  :",os.release());
console.log("📌 Architecture :",os.release());

console.log("\n🧠 CPU INFO"); 
let cpu=os.cpus()
// console.log(os.cpus());
console.log(chalk.magenta("Cores :"),cpu.length);
let mod=os.cpus()[0].model
console.log(chalk.magenta("Module :"),mod);

console.log(chalk.blue("MODEL:", os.freemem())); 
console.log(chalk.greenBright("\n📝 MEMORY INFO :"));

console.log("Total memeory :", (os.totalmem()/1024/1024/1024).toFixed(2), "GB"); 
console.log("Free memory :",(os.freemem()/1024/1024/1024).toFixed(2), "GB");

console.log(chalk.red("\n🛜 NETWORK INTERFACES"));
let wifi=os.networkInterfaces()

console.log(chalk.green("INTERFACE WIFI :"),wifi.lo[0].address);

console.log(chalk.green("TNTERFACES( Look pseudo-interface 1 :"),wifi.lo[1].address);

console.log(chalk.green("VRthernet :wsl :hyper-v firewall :"),wifi. eth0[1].address);


console.log("\n⏳ uptime ");

// let time=os.uptime()
console.log(chalk.red("UPTIME  (Second)",os.uptime()));

console.log("\n🏚️ Home Directory :",os.homedir());
console.log("📂Tem Directory :",os.tmpdir());


console.log(chalk.green(" \n✔️  system Info reterived Successfully"));  