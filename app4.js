import chalk from "chalk";
import fs from "fs/promises";
import  readline from "readline-sync"

async function makeFile() {
    try {
        let fileName = readline.question("enter the file name")
        let fileCntent=readline.question("enter the file content") 
        await fs.writeFile(fileName,fileCntent)
        console.log("file is created ");
        
    } catch (error) {
        console.log(error);
        
    }
    
}
makeFile()