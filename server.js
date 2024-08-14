import http from "http";
const PORT = process.env.PORT;
const server = http.createServer((req, res) => {
	// res.write("Hello world!");
	if (req.url === "/") {
		res.writeHead(200, { "content-Type": "text/html" });
		res.end("<h1>Homepage</h1>");
	} else if (req.url === "/about") {
		res.writeHead(200, { "content-Type": "text/html" });
		res.end("<h1>About</h1>");
	} else {
		res.writeHead(404, { "content-Type": "text/html" });
		res.end("<h1>Not found</h1>");
	}
});

// Export the server or the function to start the server
export { server, PORT };
