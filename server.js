// Import the HTTP module to create a web server
import http from "http";
// Retrieve the PORT value from the environment variables
const PORT = process.env.PORT;

// Create the HTTP server
const server = http.createServer((req, res) => {
	// This callback function is executed every time the server receives a request
	try {
		// Check if the request method is GET before proceeding
		if (req.method === "GET") {
			// Check the URL of the request
			if (req.url === "/") {
				// If the URL is "/", send the homepage response
				res.writeHead(200, { "Content-Type": "text/html" });
				// Set the response header with status code 200 and content type as HTML
				res.end("<h1>Homepage</h1>"); // Send the response body with a message
			} else if (req.url === "/about") {
				// If the URL is "/about", send the about page response
				res.writeHead(200, { "Content-Type": "text/html" });
				// Set the response header with status code 200 and content type as HTML
				res.end("<h1>About</h1>"); // Send the response body with a message
			} else {
				// For any other URL, send a 404 Not Found response
				res.writeHead(404, { "Content-Type": "text/html" });
				// Set the response header with status code 404 and content type as HTML
				res.end("<h1>Not found</h1>"); // Send the response body with a message
			}
		} else {
			throw new Error("Method not allowed");
		}
	} catch (error) {
		res.writeHead(404, { "Content-Type": "text/plain" });
		res.end(`${error.message}`); // Send the response body with a message
	}
});

// Export the server instance and the PORT value so they can be used in other files
export { server, PORT };
