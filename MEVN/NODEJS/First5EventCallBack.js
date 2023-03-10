const fs = require("fs");





function readFirstFiveCallback(error , fileData){
    if(error){
        console.log("error");
        return;
    }

    //converting the filedata which is buffer to string and splitting by line
    const Lines = fileData.toString().split("\n");
    //slice the lines to the first five and log them
    Lines.slice(0,5).forEach((line) => {
        console.log(line);

    });
}
//function call with callback
fs.readFile("./static/files/tenEventNumber",readFirstFiveCallback);