const http = require("http");
const mimeType = require("./modules/mimeType");
const errMsg = require("./modules/errMsg");
const getMethod = require("./modules/getMethod");
const postMethod = require("./modules/postMethod");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    getMethod(req, res);
  } else if (req.method === "POST") {
    postMethod(req, res);
  } else {
    res.writeHead(404, { "Content-Type": mimeType.text });
    res.end(errMsg[404]);
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
