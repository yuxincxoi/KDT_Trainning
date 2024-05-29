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

      // 요청을 받으면 실행
      req.on("data", (chunk) => {
        body += chunk.toString();
      });
      // req.on("data", (data) => {
      //   body += data;
      // });

      // 데이터를 다 받았을 때(수신완료) 실행
      req.on("end", () => {
        // * url body에 담긴 객체 parse하기
        const parsedData = new URLSearchParams(body);
        const title = parsedData.get("title");
        const time = parsedData.get("time");
        const place = parsedData.get("place");
        const memo = parsedData.get("memo");
        // const parsedData = JSON.parse(body);
        // const title = parsedData.title;
        // ...

        // * JSON 형식으로 담기 위한 변수
        const jsonData = {
          title: title,
          time: time,
          place: place,
          memo: memo,
        };

        // * JavaScript 객체를 JSON으로 변환시킨 변수
        const jsonDataString = JSON.stringify(jsonData, null, 2);

        // * 입력한 데이터를 JSON 형식의 파일로 생성
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
            console.log("json 파일 생성");
          }
        );

        // * JSON 파일 parse하여 읽기
        fs.readFile(path.join(__dirname, "data.json"), (err) => {
          if (err) {
            res.writeHead(500, {
              "Content-Type": "text/plain; charset=utf-8",
            });
            res.end("서버 자체 에러");
            return;
          }
          res.writeHead(200, {
            "Content-Type": "application/json; charset=utf-8",
          });
          res.end();
          // let data = JSON.parse(fs.readFileSync("./data.json"));
          // console.log(data);
          console.log("json 데이터를 읽었다 !");
        });
        // res.writeHead(200, {
        //   "Content-Type": "application/json; charset=utf-8",
        // });
        // res.write(JSON.stringify({ message: "전송 완료" }));
        // res.end();

        // console.log(typeof data.title);
        // console.log(data.title);
      });
    } else {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("404 code는 페이지를 찾을 수 없음");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 code는 페이지를 찾을 수 없음");
  }

  // !
  // let folderData = [];

  // let liTag = "";

  // fs.readdir(
  //   path.join(__dirname, "public", "writeFile"),
  //   "utf8",
  //   (err, data) => {
  //     if (err) {
  //       console.error("Error : ", err);
  //     }
  //     folderData = data;
  //     for (let i = 0; i < folderData.length; i++) {
  //       if (folderData[i].includes(".html")) {
  //         folderData[i] = folderData[i].split(".html")[0];
  //         liTag += `<li><a href="${folderData[i]}.html">${folderData[i]}</a></li>`;
  //       }
  //     }
  //   }
  // );

  // const server = http.createServer((req, res) => {
  // let url = req.url;
  // let filePath = fileUtills.getFilepath(url);
  // let ext = fileUtills.getExtention(filePath);

  // let contentType = fileUtills.getContentType(ext);
  // if (req.method === "GET") {
  //   if (req.url === url) {
  //     fs.readFile(filePath, (err, data) => {
  //       if (err) {
  //         connectErr(res);
  //         return err;
  //       }
  //       res.statusCode = 200;
  //       res.setHeader("Content-Type", contentType);
  //       res.write(data);
  //       res.end();
  //     });
  //   } else if (req.url === "/favicon.ico") {
  //     return;
  //   } else {
  //     notFound(res);
  //   }
  // } else if (req.method === "POST") {
  //   if (req.url === "/create") {
  //     let body = "";
  //     req.on("data", (chunk) => {
  //       body += chunk.toString();
  //     });
  //     req.on("end", () => {
  //       const parsedData = qs.parse(body);
  //       const title = parsedData.title;
  //       const content = parsedData.content;
  //       let convertData = template(title, content);

  //       let nowDate = today();

  //       fs.writeFile(
  //         path.join(__dirname, "public", "writeFile", `${nowDate}.html`),
  //         convertData,
  //         (err) => {
  //           if (err) {
  //             console.error("Error : ", err);
  //           }
  //         }
  //       );

  //       liTag += `<li><a href="${nowDate}.html">${nowDate}</a></li>`;

  //       let mainIndex = mainTemp(liTag);

  //       fs.writeFile(
  //         path.join(__dirname, "public", "index.html"),
  //         mainIndex,
  //         (err) => {
  //           if (err) {
  //             console.error("Error : ", err);
  //           }
  //           fs.readFile("./public/index.html", (err, data) => {
  //             if (err) {
  //               connectErr(res);
  //             }
  //             res.writeHead(200, {
  //               "Content-Type": "text/html; charset=UTF-8",
  //             });
  //             res.end(data);
  //           });
  //         }
  //       );
  //     });
  //   }
  // } else {
  //   notFound(res);
  // }
  // });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
