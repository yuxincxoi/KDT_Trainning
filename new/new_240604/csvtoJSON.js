const fs = require("fs");
const path = require("path");

const csvData = fs.readFileSync(path.join(__dirname, "basicData.csv"), "utf8");

// console.log(typeof csvData);
