// const eachSchedule = require("./eachSchedule");
const readDirnData = require("../data/readDirData");
// const readJsonData = require("../data/readJsonData");

const mainIdx = (value) => {
  let eachScheduleHtml = [];
  console.log(value);
  console.log(readDirnData);
  Array.from(readDirnData).forEach((dir) => {
    const objName = dir.replace(".json", "");
    const objtitle = value[objName].title;
    // const objplace = value[objName][place];
    console.log(objtitle);

    eachScheduleHtml.push(`
    <div id="eachSchedule">
    <h1>${objName}</h1>
    <p>${objName}</p>
    </div>
  `);
  });
  console.log(eachScheduleHtml);

  let data = eachScheduleHtml.join("");

  let mainIndex = `
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
    <div id="timeLine">${data}</div>
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

  return mainIndex;
};

module.exports = mainIdx;
