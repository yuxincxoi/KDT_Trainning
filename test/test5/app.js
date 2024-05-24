const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "public/index.html"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 code는 서버 자체의 에러");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.end(data);
      });
    } else if (req.url === "/style.css") {
      fs.readFile(path.join(__dirname, "public/style.css"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 code는 서버 자체의 에러");
          return;
        }
        res.writeHead(200, { "Content-Type": "text/css; charset=utf-8" });
        res.end(data);
      });
    } else if (req.url === "/script.js") {
      fs.readFile(path.join(__dirname, "public/script.js"), (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("500 code는 서버 자체의 에러");
          return;
        }
        res.writeHead(200, {
          "Content-Type": "text/javascript; charset=utf-8",
        });
        res.end(data);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 code는 페이지를 찾을 수 없음");
    }
  } else if (req.method === "POST") {
    if (req.url === "/submit") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      req.on("end", () => {
        const parsedData = new URLSearchParams(body);
        const title = parsedData.get("title");
        const time = parsedData.get("time");
        const place = parsedData.get("place");
        const memo = parsedData.get("memo");

        const jsonData = {
          title: title,
          time: time,
          place: place,
          memo: memo,
        };

        const jsonDataString = JSON.stringify(jsonData, null, 2);
        fs.writeFile(
          path.join(__dirname, "data.json"),
          jsonDataString,
          (err) => {
            if (err) {
              res.writeHead(500, {
                "Content-Type": "text/plain; charset=utf-8",
              });
              res.end("서버 자체 에러");
              return;
            }
            // res.writeHead(200, {
            //   "Content-Type": "application/json; charset=utf-8",
            // });
            res.writeHead(200, {
              "Content-Type": "text/html; charset=utf-8",
            });
            fs.readFile(
              path.join(__dirname, "public/index.html"),
              "utf8",
              (err, data) => {
                if (err) {
                  console.log(err);
                }
                res.end(data);
              }
            );
            fs.readFile(
              path.join(__dirname, "application/json"),
              "utf8",
              (err, data) => {
                if (err) {
                  console.log(err);
                }
                res.end(data);
              }
            );
            // let jsonResponse = JSON.stringify({
            //   message: "데이터가 성공적으로 저장됨",
            // });
          }
        );
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 code는 페이지를 찾을 수 없음");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 code는 페이지를 찾을 수 없음");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
