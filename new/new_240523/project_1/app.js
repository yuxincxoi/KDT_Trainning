const { read } = require("fs");
const rl = require("readline");
// console.dir(rl);

let inOut = {
  input: process.stdin,
  output: process.stdout,
};
// let inOut = {
//   input: global.process.stdin,
//   output: global.process.stdout,
// };

const readline = rl.createInterface(inOut);
// console.dir(readline);

// * 1
// readline.question("너의 이름은 무엇입니까?", (answer) => {
//   console.log("이름은 ", answer);
//   readline.close();
// });

// * 2
// readline.question("좋아하는 동물은 무엇입니까?", (answer) => {
//   if (answer === "고양이") {
//     console.log("고양이를 좋아하시군요 !");
//     readline.question("어떤 고양이를 좋아합니까?", (answer) => {
//       if (answer === "치즈") {
//         console.log("치즈는 맛있어");
//       } else if (answer === "고등어") {
//         console.log("고등어는 맛있어");
//       } else if (answer === "삼색이") {
//         console.log("알록달록 삼색이");
//       } else {
//         console.log("고양이는 귀여워.");
//       }
//       readline.close();
//     });
//   } else {
//     console.log("고양이는 귀엽습니다.");
//     readline.close();
//   }
// });

// * 3
readLine.question(
  "만들고 싶은 HTML 파일이름을 작성해주세요. : ",
  function (answer) {
    let data = answer;

    const fs = require("fs");
    fs.writeFileSync(data + ".html", "hello", "utf-8", function (error) {
      if (error === true) {
        console.log("파일 생성 실패");
      } else {
        console.log("파일 생성 성공");
      }
      readLine.close();
    });
  }
);
