const http = require("http");
const fs = require("fs");
const path = require("path");

const mime = {
  html: "text/html; charset=utf-8",
  text: "text/plain; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "text/javascript; charset=utf-8",
};

const errMsg = {
  500: "500 code는 서버 자체의 에러",
  404: "404 code는 페이지를 찾을 수 없음",
};

const err500 = (err) => {
  if (err) {
    res.writeHead(500, { "Content-Type": mime.text });
    res.end(errMsg[500]);
    return;
  }
};

const err404 = (res) => {
  res.writeHead(404, { "Content-Type": mime.text });
  res.end(errMsg[404]);
};

let eachSchedule = "";
let mainIdx = "";

// todo : readFile, writeFile 함수로 만들기
const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
        err500(err);
        res.writeHead(200, { "Content-Type": mime.html });
        res.end(data);
      });
    } else if (req.url === "/style.css") {
      fs.readFile(path.join(__dirname, "public", "style.css"), (err, data) => {
        err500(err);
        res.writeHead(200, { "Content-Type": mime.css });
        res.end(data);
      });
    } else if (req.url === "/script.js") {
      fs.readFile(path.join(__dirname, "public", "script.js"), (err, data) => {
        err500(err);
        res.writeHead(200, {
          "Content-Type": mime.js,
        });
        res.end(data);
      });
    } else {
      err404(res);
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
          path.join(__dirname, "data", `${title}.json`),
          jsonDataString,
          (err) => {
            err500(err);
            console.log("json 파일 생성");
          }
        );

        // * JSON 파일 parse하여 읽기
        let readDir = fs.readdirSync(path.join(__dirname, "data"), (err) => {
          err500(err);
          // let readData = JSON.parse(data);
          console.log("data directories를 읽었다 !");
        });

        readDir.forEach((element) => {
          let readData = fs.readFileSync(
            path.join(__dirname, "data", `${element}`),
            "utf8"
          );
          console.log(readData);
        });

        eachSchedule += `
            <div id="eachSchedule">
              // <h1></h1>
              // <p></p>
            </div>
          `;

        mainIdx = `
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="stylesheet" href="style.css" />
              </head>
              <body>
                <div id="root">
                  <div id="detail">
                    <div id="createBtn"></div>
                    <div id="scheduleContainer">
                      <div id="contents">
                        <div id="timeBox"></div>
                        <div id="timeLine">${eachSchedule}</div>
                      </div>
                      <form id="inputBox" action="submit" method="post">
                        <div>
                          <!-- <label for="title">일정</label> -->
                          <input id="title" type="text" name="title" placeholder="일정" />
                        </div>
                        <div>
                          <!-- <label for="time">시간</label> -->
                          <input id="time" type="time" name="time" placeholder="시간" />
                        </div>
                        <div>
                          <!-- <label for="place">장소</label> -->
                          <input id="place" type="text" name="place" placeholder="장소" />
                        </div>
                        <div>
                          <!-- <label for="memo">메모</label> -->
                          <input id="memo" type="text" name="memo" placeholder="메모" />
                        </div>
                        <div>
                          <button id="saveBtn" type="submit">Save</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <script src="script.js"></script>
              </body>
            </html>
          `;

        // * index 다시 생성
        fs.writeFile(
          path.join(__dirname, "public", "index.html"),
          mainIdx,
          (err) => {
            err500(err);
            console.log("index 다시 생성 !");

            // * index 다시 읽기
            fs.readFile(
              path.join(__dirname, "public", "index.html"),
              (err, data) => {
                err500(err);
                res.writeHead(200, {
                  "Content-Type": mime.html,
                });
                console.log("index 다시 읽기 !");
                res.end(data);
              }
            );
          }
        );
      });
    } else {
      err404(res);
    }
  } else {
    err404();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
