const http = require('http');
var dt =require('./Example3.js');

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'}
    );
    res.write('Example1');
    res.end();


}).listen(8081);