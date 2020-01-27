//Creation of server

const http = require('http');

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req,res) => {   //(request,response)
	//who request to server
	console.log(req.headers);

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html');  //type of content we recieve
	res.end('<html> <body> <h1> Server Connection success. </h1> </body> </html>');

});

//Server call or start

server.listen(port, hostname, ()=> {
	console.log('server running at http://${hostname}:${port}',hostname,port);
});