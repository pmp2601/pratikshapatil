const http = require('http');
var dt =require('./Example1.js');

http.createServer(function(req,res)
{
    res.writeHead(200,{'Content-Type':'text/html'}
    );
    res.write('Example2');
    res.end();


}).listen(8082);