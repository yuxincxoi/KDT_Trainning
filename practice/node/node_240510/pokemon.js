const fs = require("fs");
const data = require("./pokemonNames.json");

fs.mkdir("./pokemons", (err) => {
  console.log("폴더 생성 완료 !");
  if (err) console.error("Error: ", err);
});

function pokemonHtml(pokemon) {
  let name = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>${pokemon}</h1>
    </body>
    </html>
  `;
  return name;
}

function pokemonHtmlMaker() {
  try {
    data.forEach((name) => {
      fs.writeFileSync(
        `./pokemons/${name}.html`,
        pokemonHtml(`${name}`),
        "utf8"
      );
    });
    console.log(`${data.length}개의 html 파일 생성 완료 !`);
  } catch (err) {
    console.error("Error: ", err);
  }
}

pokemonHtmlMaker();
