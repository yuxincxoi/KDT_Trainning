const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    console.log("요청 URL 검사: ", req.url);
    if (req.url === "/") {
      const name = fs.readFileSync("index.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.write(name);
      res.end();
    }
    if (req.url.startsWith("/test")) {
      const inputData = req.url.split("?")[1];
      const data = qs.decode(inputData);
      console.log(data);

      fs.writeFileSync(
        `./${data.name}.txt`,
        `${data.content}`,
        "utf8",
        (err) => {
          console.log("파일 생성 !");
          if (err) {
            console.log(err);
          }
        }
      );
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
