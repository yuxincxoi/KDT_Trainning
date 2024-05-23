const rl = require("readline");
const fs = require("fs");

// const convert = JSON.parse(pokemonData);
const pokemonData = JSON.parse(fs.readFileSync("./pokemon.json"));

// console.log(pokemonData);
// console.log(typeof pokemonData);
console.log(Array.isArray(pokemonData));

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("포켓몬스터 이름을 작성해주세요.", (answer) => {
  // 자바스크립트스러움
  let data = [];
  pokemonData.forEach((element) => {
    if (answer === element) {
      data.push(element);
      readline.close();
      console.log(data);
    } else {
      fs.writeFileSync(
        "./searData.json",
        JSON.stringify(data),
        "utf8",
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
  if (data.length === 0) {
    console.log("존재하지 않는 포켓몬입니다.");
  }
  readline.close();

  // for (let i = 0; i < pokemonData.length; i++) {
  //   if (answer === pokemonData[i]) {
  //     console.log(`${i}번째에 포켓몬스터 이름이 존재합니다.`);
  //     readline.close();
  //     break;
  //   } else {
  //     console.log("존재하지 않는 포켓몬입니다.");
  //     readline.close();
  //   }
  // }
});
