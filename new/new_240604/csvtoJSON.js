const fs = require("fs");
const path = require("path");

const csvData = fs.readFileSync(path.join(__dirname, "basicData.csv"), "utf8");

const rows = csvData.split("\r\n");

const year = rows[0].split(",");

let data = {};

for (i = 1; i < rows.length - 1; i++) {
  const obj = {};
  const row = rows[i].split(",");
  for (j = 1; j < year.length; j++) {
    obj[year[j]] = row[j];
  }
  data[row[0]] = obj;
  // obj["지역"] = row[j];
  // data.push(obj);
}
console.log(data);

const jsonData = JSON.stringify(data);

fs.writeFileSync(path.join(__dirname, "jsonData.json"), jsonData);
