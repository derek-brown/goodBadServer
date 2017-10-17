var http = require("http");

var PORTAL = 7000;
var PORTALTWO = 7500;

function handleRequest(request, response){
	response.end("It works!! Path Hit: " + request.url);
}


var server = http.createServer(handleRequest);

server.listen(PORTAL, function(){
	console.log("Server listening on: http://localhost: " + PORTAL);
});

server.listen(PORTALTWO, function(){
	console.log("Server listening on: http://localhost: " + PORTALTWO);
});
