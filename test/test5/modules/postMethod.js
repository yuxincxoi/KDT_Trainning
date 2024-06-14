const fs = require("fs");
const path = require("path");
const mimeType = require("./mimeType");
const readFile = require("./readFile");
const errMsg = require("./errMsg");
const mainIdx = require("./mainIndex");
// const eachSchedule = require("./eachSchedule");

const postMethod = (req, res) => {
  if (req.url === "/submit") {
    let body = "";

    // 요청을 받으면 실행
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // 데이터를 다 받았을 때(수신완료) 실행
    req.on("end", () => {
      // * url body에 담긴 객체 parse하기
      const parsedData = new URLSearchParams(body);
      const title = parsedData.get("title");
      const time = parsedData.get("time");
      const place = parsedData.get("place");
      const memo = parsedData.get("memo");

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
      fs.writeFileSync(
        path.join("./jsonData", `${title}.json`),
        jsonDataString,
        (err) => {
          if (err) {
            console.error(err);
            return;
          }

          console.log("json 파일 생성");
        }
      );

      // * JSON 파일의 파일명을 담을 변수 fileDaga
      let fileData = [];
      // let eachScheduleHtml = [];

      // * JSON 파일들을 담은 JsonData 폴더 읽기
      fs.readdir("./jsonData", (err, dir) => {
        if (err) {
          console.error(err);
          return;
        }

        dir.forEach((value) => {
          // * 각각의 JSON 파일 읽기
          fs.readFile(`./jsonData/${value}`, (err, data) => {
            if (err) {
              console.error(err);
            }
            // * 읽은 JSON 파일명을 fileData에 넣기
            fileData.push(`${value.replace(`.json`, "")}:${data}`);

            // * 파일명을 배열로 export하는 파일 생성
            fs.writeFile(
              `./data/readDirData.js`,
              `module.exports = ${JSON.stringify(dir, null, 2)}`,
              (err) => {
                if (err) console.error(err);
              }
            );

            // * 읽은 JSON 파일의 data를 export하는 파일 생성
            fs.writeFile(
              `./data/readJsonData.js`,
              `module.exports = {${fileData}}`,
              (err) => {
                if (err) {
                  console.error(err);
                }
              }
            );
            // eachSchedule += `
            //   <div id="eachSchedule">
            //   <h1>${data.title}</h1>
            //   <p>${data.place}</p>
            //   </div>
            // `;
          });
        });
        console.log("json 데이터를 읽었다 !");

        //     mainIdx = `
        //   <!DOCTYPE html>
        //   <html lang="en">
        //   <head>
        //   <meta charset="UTF-8" />
        //   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        //   <title>Document</title>
        //   <link rel="stylesheet" href="style.css" />
        //   </head>
        //   <body>
        //   <div id="root">
        //   <div id="detail">
        //   <div id="createBtn"></div>
        //   <div id="scheduleContainer">
        //   <div id="contents">
        //   <div id="timeBox"></div>
        //   <div id="timeLine">${eachSchedule}</div>
        //   </div>
        //   <form id="inputBox" action="submit" method="post">
        //   <div>
        //   <!-- <label for="title">일정</label> -->
        //   <input id="title" type="text" name="title" placeholder="일정" />
        //   </div>
        //   <div>
        //   <!-- <label for="time">시간</label> -->
        //   <input id="time" type="time" name="time" placeholder="시간" />
        //   </div>
        //   <div>
        //   <!-- <label for="place">장소</label> -->
        //   <input id="place" type="text" name="place" placeholder="장소" />
        //   </div>
        //   <div>
        //   <!-- <label for="memo">메모</label> -->
        //   <input id="memo" type="text" name="memo" placeholder="메모" />
        //   </div>
        //   <div>
        //   <button id="saveBtn" type="submit">Save</button>
        //   </div>
        //   </form>
        //   </div>
        //   </div>
        //   </div>
        //   <script src="script.js"></script>
        //   </body>
        //   </html>
        // `;

        // * index 다시 생성
        fs.readFile(path.join("./data", "readJsonData.js"), (err, data) => {
          if (err) console.error(err);
          fs.writeFile(
            path.join("./public", "index.html"),
            mainIdx(data),
            (err) => {
              if (err) {
                res.writeHead(500, { "Content-Type": mimeType.text });
                res.end(errMsg[500]);
                return;
              }
              console.log("index 다시 생성 !");

              // * index 다시 읽기
              // readFile(path.join("./public", "index.html"), mimeType.html, res);
              fs.readFile(path.join("./public", "index.html"), (err, index) => {
                if (err) {
                  res.writeHead(500, { "Content-Type": mimeType.text });
                  res.end(errMsg[500]);
                  return;
                }
                res.writeHead(200, { "Content-Type": mimeType.html });
                res.end(index);
                console.log("index를 다시 읽었다 !");
              });
            }
          );
        });
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": mimeType.text });
    res.end(errMsg[404]);
  }
};

module.exports = postMethod;
