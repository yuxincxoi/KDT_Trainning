const lunchMenus = [
  ["주니어와퍼", "몬스터와퍼", "콰트로치즈와퍼"],
  "순두부찌개",
  ["치킨마요", "참치마요", "도련님도시락"],
  ["짜장면", "짬뽕", "볶음밥", "잡채밥", "유린기"],
  "주꾸미",
  "함박스테이크",
  "마라탕",
  "곰탕",
  "돈까스",
  "쌀국수",
  "분식",
  "칼국수",
  "콩나물밥",
];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

function lunchSelector(array) {
  let length = lunchMenus.length;
  let todaysMenu = lunchMenus[getRandomInt(0, length)];
  if (Array.isArray(todaysMenu) == true) {
    todaysMenu = todaysMenu[getRandomInt(0, todaysMenu.length)];
  }

  return console.log(todaysMenu);
}

lunchSelector();
