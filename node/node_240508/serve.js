const http = require("node:http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("a.html", "utf8", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

server.listen(8000);
