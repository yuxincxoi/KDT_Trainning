const fs = require("fs");
const path = require("path");

const csvData = fs.readFileSync(path.join(__dirname, "basicData.csv"), "utf8");

const rows = csvData.split("\r\n");

const year = rows[0].split(",");

// console.log(year);
