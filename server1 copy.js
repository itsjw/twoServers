//Require/import the HTTP module.
var http = require("http");

//Define Ports to Listen for Incoming Requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests/responses
function handleRequest1(request, response){
	//String directly to client
	response.end("It Works!! Path Hit: " + request.url);
	//Where Server stuff usually goes.
}

function handleRequest2(request, response){
	response.end("It Works!! Path Hit: " + request.url);
}

//Use Node HTTP package to create server
//Pass handle request to fuel the function
var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

//Keys to the ignition
server1.listen(PORT1, function(){
	console.log("Server listening on: http://localhost" + PORT1);
});

server2.listen(PORT2, function(){
	console.log("Server listening on http://localhost" + PORT2);
});



