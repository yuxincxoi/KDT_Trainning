const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    console.log("요청 URL 검사: ", req.url);
    if (req.url === "/") {
      const index = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.write(index);
      res.end();
    }
    if (req.url === "/style.css") {
      const style = fs.readFileSync("./public/style.css", "utf8");

      res.statusCode = 200;
      res.setHeader("content-type", "text/css; charset=utf-8");
      res.write(style);
      res.end();
    }
    if (req.url === "/index.js") {
      const script = fs.readFileSync("./public/index.js", "utf8");

      res.statusCode = 200;
      res.setHeader("content-type", "text/javascript; charset=utf-8");
      res.write(script);
      res.end();
    }
    if (req.url.startsWith("/test")) {
      const inputData = req.url.split("?")[1];
      const data = qs.decode(inputData);
      // console.log(data);
    }
  }
});

const PORT = 8080;
server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
});
