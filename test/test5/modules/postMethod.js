const fs = require("fs");
const path = require("path");
const mimeType = require("./mimeType");
const readFile = require("./readFile");
const errMsg = require("./errMsg");
const mainIdx = require("./mainIndex");

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
      fs.writeFile(
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

      // * JSON 파일 parse하여 읽기

      let fileData = [];
      fs.readdir("./jsonData", (err, dir) => {
        if (err) {
          console.error(err);
          return;
        }

        dir.forEach((value) => {
          fs.readFile(`./jsonData/${value}`, (err, data) => {
            if (err) {
              console.error(err);
            }
            fileData.push(`${value.replace(`.json`, "")}:${data}`);

            fs.writeFile(
              `./data/readDirData.js`,
              `module.exports = ${JSON.stringify(dir, null, 2)}`,
              (err) => {
                if (err) console.error(err);
              }
            );

            fs.writeFile(
              `./data/readJsonData.js`,
              `module.exports = {${fileData}}`,
              (err) => {
                if (err) {
                  console.error(err);
                }
              }
            );
          });
        });

        console.log("json 데이터를 읽었다 !");
      });

      // * index 다시 생성
      fs.writeFile(path.join("./public", "index.html"), mainIdx, (err) => {
        if (err) {
          res.writeHead(500, { "Content-Type": mimeType.text });
          res.end(errMsg[500]);
          return;
        }
        console.log("index 다시 생성 !");

        // * index 다시 읽기
        readFile(path.join("./public", "index.html"), mimeType.html, res);
      });
    });
  } else {
    res.writeHead(404, { "Content-Type": mimeType.text });
    res.end(errMsg[404]);
  }
};

module.exports = postMethod;
