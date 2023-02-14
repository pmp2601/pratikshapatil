const fs = require("fs");


function readUTF8File(FilePath) {


    fs.readFile(FilePath,"utf-8",(data,error) => {
        if(error)
        {
            console.log(error);
            return;
        }
        console.log(data);

    });
}
readUTF8File("./abcd.txt");

readUTF8File("./static/files/testFiles.txt");

readUTF8File("./static/files/testFileDifferentEncoding.txt");