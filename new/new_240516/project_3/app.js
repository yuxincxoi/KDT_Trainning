const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    console.log("요청 URL 검사: ", req.url);
    if (req.url === "/") {
      const name = fs.readFileSync("index.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.write(name);
      res.end();
    }
    if (req.url.startsWith("/test")) {
      let body = "";
      req.on("data", function (data) {
        body = body + data;
      });
      req.on("end", function () {
        let post = qs.parse(body);
        console.log(post);
      });
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
