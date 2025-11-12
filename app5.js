import fs from "fs/promise"



// final.js

async function allMEThod(){
    try {
        let FolderName="test"
        let fileName="hi.txt";
        let renameFiles="bye.txt";
        let fileContenct="hello.txt"

        // 1.creat a folder 

        await fs.mkdir(FolderName);
        console.log( "folder created"); 

        //2. delet folder

        await fs.rmdir(FolderName)
        console.log("folder deleted");

        // 3. creat file 

        await fs.write(fileName)
        console.log("file created");

    //   4.read a file 
    let output=await fs.readfile(fileName, "utf-8");
    console.log(output);

    //  5.rename file

    await fs.rename(fileName, renameFiles);
    console.log(renameFiles);

    // 6. delet file 
    await fs.unlink(renameFiles)
    console.log(renameFiles);

    // 7.list files  
    let list = await fs.readdir(filePathLs);
    console.log(list);

    // 8 update file 
    await fs.appenfiles(fileName,  "\nwHELLO hi bye")
    console.log("file update");

    
        
    } catch (error) {


        
    }
}



