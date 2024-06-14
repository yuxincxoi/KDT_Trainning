const readDirnData = require("../data/readDirData");
const readJsonData = require("../data/readJsonData");

const eachSchedule = () => {
  let eachScheduleHtml = [];
  readDirnData.forEach((dir) => {
    const objName = dir.replace(".json", "");
    const title = readJsonData[objName].title;
    const place = readJsonData[objName].place;

    eachScheduleHtml.push(`
    <div id="eachSchedule">
    <h1>${title}</h1>
    <p>${place}</p>
    </div>
  `);
    // console.log(eachScheduleHtml);
  });
  return eachScheduleHtml.join("");
};

module.exports = eachSchedule;
