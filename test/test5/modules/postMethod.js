const fs = require("fs");
const path = require("path");
const mimeType = require("./mimeType");
const readFile = require("./readFile");
const errMsg = require("./errMsg");

let eachSchedule = "";
let mainIdx = "";

const postMethod = (req, res) => {
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
        path.join("./", "data", `${title}.json`),
        jsonDataString,
        (err) => {
          if (err) {
            res.writeHead(500, { "Content-Type": mimeType.text });
            res.end(errMsg[500]);
            return;
          }
          console.log("json 파일 생성");
        }
      );

      // * JSON 파일 parse하여 읽기
      let dir = fs.readdirSync(path.join("./", "data"), (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": mimeType.text });
          res.end(errMsg[500]);
          return;
        }
      });
      console.log(dir);

      // for (value of dir) {
      // let dataList = [];
      let readJsonData = fs.readFileSync(path.join("./", "data", `kko.json`));

      console.log(typeof readJsonData);
      let parseJsonData = JSON.parse(readJsonData);
      console.log(typeof parseJsonData);
      // dataList.push(JSON.parse(readJsonData));

      console.log(readJsonData);

      eachSchedule += `
          <div id="eachSchedule">
            <h1></h1>
            <p></p>
          </div>
        `;
      // }
      console.log("json 데이터를 읽었다 !");

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
      fs.writeFile(path.join("./", "public", "index.html"), mainIdx, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": mimeType.text });
          res.end(errMsg[500]);
          return;
        }
        console.log("index 다시 생성 !");

        // * index 다시 읽기
        readFile(path.join("./", "public", "index.html"), mimeType.html, res);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": mimeType.text });
    res.end(errMsg[404]);
  }
};

module.exports = postMethod;
