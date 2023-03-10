var http = require("http");
const express = require("express");
const app =express()
app.get("/",function(req,res){
    res.send("hello");
}) ;
app.listen(3000,()=>{
    console.log("port number 3000");
});