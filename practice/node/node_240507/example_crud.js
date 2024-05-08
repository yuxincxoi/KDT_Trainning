const fs = require("fs");

// Create 1
fs.mkdir("./crud", (err) => {
  console.log("폴더 생성 !");
  if (err) throw err;
});
// fs.open("./crud/create.js", "w", (err) => {
//   if (err) throw err;
// });

// Create 2
data = "console.log('hi');";
fs.writeFileSync("./crud/create2.js", data, "utf8", (err) => {
  console.log("create2 생성 !");
  if (err) throw err;
});

// Read
// fs.readFile("./crud/create2.js", "utf-8", (err, data) => {
//   console.log(data);
//   if (err) throw err;
// });

// // Update
// fs.rename("./crud/create2.js", "./crud/create1.js", (err) => {
//   console.log("create2 -> create1");
//   if (err) throw err;
// });

// // Delete
// fs.unlink("./crud/create1.js", (err) => {
//   console.log("삭제되었습니다 !");
//   if (err) throw err;
// });
