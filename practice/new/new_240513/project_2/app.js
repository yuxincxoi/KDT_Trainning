const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      const data = fs.readFileSync("./public/index.html");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/html; charset=utf8");
      res.write(data);
      res.end();
    }
    if (req.url === "/style.css") {
      const style = fs.readFileSync("./public/style.css");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/css; charset=utf8");
      res.write(style);
      res.end();
    }
    if (req.url === "/script.js") {
      const script = fs.readFileSync("./public/script.js");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/javascript; charset=utf8");
      res.write(script);
      res.end();
    }
  }
});

server.listen(3000);
