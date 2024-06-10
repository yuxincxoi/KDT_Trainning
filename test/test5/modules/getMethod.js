const path = require("path");
const mimeType = require("./mimeType");
const readFile = require("./readFile");

const getMethod = (req, res) => {
  if (req.url === "/") {
    readFile(path.join(__dirname, "public", "index.html"), mimeType.html, res);
  } else if (req.url === "/style.css") {
    readFile(path.join(__dirname, "public", "style.css"), mimeType.css, res);
  } else if (req.url === "/script.js") {
    readFile(path.join(__dirname, "public", "script.js"), mimeType.js, res);
  } else {
    res.writeHead(404, { "Content-Type": mimeType.text });
    res.end(errMsg[404]);
  }
};

module.exports = getMethod;
