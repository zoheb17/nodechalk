// os module in node .js 

//  node .js  comes with a built - in  module called os that provides information about your computer operating system 
//you dont need to install anything -just import it  ex import  os from os 


import os, { platform } from "os";

// to indetify whis os 

console.log("Platform",os.platform());

console.log("ARCHITECTURE",os.arch());
console.log("CPUS",os.cpus);
console.log("hostname",os.hostname());
