const http = require("http");

// req => represents the incoming request
// res => response is what we are sending back
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    } else if (req.url === "/about") {
        res.end("this is our about page");
    } else {
        res.end(`<h1>Oops!</h1><a href="/">Go back home</a>`);
    }
});

server.listen(5000); // 5000 is port