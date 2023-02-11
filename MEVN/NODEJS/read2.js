const fs = require('fs');//in build module

fs.readFile('./demofile.txt','utf8',(err,data) => {
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(data);

});