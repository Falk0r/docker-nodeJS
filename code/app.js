const http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Node & Docker Running...");
});

server.listen(5000);

console.log("Node HTTP Server started at http://localhost:5000/");
