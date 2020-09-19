const { write } = require('fs');
var http=require('http');
var URL=require('url');


var server=http.createServer(function (req, res) {
   var myURL ="https://www.instagram.com/stacklearner/";
   var myURLObj= URL.parse(myURL, true);

   var myHostName=myURLObj.host;
   var myPathName=myURLObj.pathname;
   var mySearchName=myURLObj.search;

   res.writeHead(200, {'Context-Type':'text/html'})
   res.write(myHostName);
   res.end();
});

server.listen(5050);
console.log("Server Run Success")