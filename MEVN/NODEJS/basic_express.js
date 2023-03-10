const express = require("express");

const app = express();

app.get("/",(req,res) =>{
    res.send("route at root");

}
);

app.get("/Hello",(req,res) =>{
    res.send("route at hello");

}
);

app.listen(3000,() =>
{
    console.log("listening on 3000");
});