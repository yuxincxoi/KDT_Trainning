const fs = require("fs");

data = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>Hi</h1>
  </body>
  </html>
`;

fs.writeFile("a.html", data, "utf8", (err) => {
  console.log("a.html 생성 !");
  if (err) throw err;
});
