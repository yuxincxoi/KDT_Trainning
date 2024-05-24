const http = require("http");
const fs = require("fs");
const qs = require("node:querystring");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    console.log("요청 URL 검사 :", req.url);
    if (req.url === "/") {
      const data = fs.readFileSync("index.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-type", "text/html; charset=utf-8");
      res.write(data);
      res.end();
    }
    if (req.url.startsWith("/test")) {
      // 혹시 url에 "/test" 글자가 있다면 아래 로직을 실행해줘.
      const inputData = req.url.split("?")[1];
      const data = qs.decode(inputData);
      // url에 querystring이라는 이름의 규칙이 보여서 적당히 잘라서 사용할래. 받아온 데이터를 확인해줘.
      console.log(data);
    }
  }
});

const PORT = 3000;
server.listen(PORT, function (err) {
  if (err) {
    console.log(err);
  }
  console.log("서버 돌아감");
  console.log(`http://localhost:${PORT}`);
});
