var http=require('http');


var server=http.createServer(function (req, res) {
    if(req.url=="/"){
       res.writeHead(200, {'Content-type':'text/html'})
       res.write('<h1> ')
    }
    else if(req.url=="/about"){
        res.writeHead(200, {'Content-type':'text/html'})
    }
    else if(req.url=="/contact"){
        res.writeHead(200, {'Content-type':'text/html'})
    }
});

server.listen(5050);
console.log("Server Run Success")