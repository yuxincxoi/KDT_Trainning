import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // home
    if (req.url === "/" || req.url === "/index.html") {
      const home = fs.readFileSync("./public/index.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/html; charset=utf-8");
      res.write(home);
      res.end();
    }
    // style
    if (req.url === "/style.css") {
      const style = fs.readFileSync("./style/style.css", "utf8");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/css; charset=utf-8");
      res.write(style);
      res.end();
    }
    // data type
    if (req.url === "/dataType.html") {
      const dataType = fs.readFileSync("./public/dataType.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/html; charset=utf-8");
      res.write(dataType);
      res.end();
    }
    // object & array
    if (req.url === "/objAry.html") {
      const objAry = fs.readFileSync("./public/objAry.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/html; charset=utf-8");
      res.write(objAry);
      res.end();
    }
    // function
    if (req.url === "/func.html") {
      const func = fs.readFileSync("./public/func.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/html; charset=utf-8");
      res.write(func);
      res.end();
    }
    // if & for
    if (req.url === "/ifor.html") {
      const ifor = fs.readFileSync("./public/ifor.html", "utf8");

      res.statusCode = 200;
      res.setHeader("content-Type", "text/html; charset=utf-8");
      res.write(ifor);
      res.end();
    }
  }
});

// console.log(data);

server.listen(8080);
