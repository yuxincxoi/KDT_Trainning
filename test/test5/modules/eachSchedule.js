const readDirnData = require("../data/readDirData");
const readJsonData = require("../data/readJsonData");

let eachScheduleHtml = "";

const eachSchedule = () => {
  readDirnData.map((dir) => {
    const objName = dir.replace(".json", "");

    eachScheduleHtml += `
    <div id="eachSchedule">
    <h1>${readJsonData[objName].title}</h1>
    <p>${readJsonData[objName].place}</p>
    </div>
  `;
  });
  return eachScheduleHtml;
};

module.exports = eachSchedule();
