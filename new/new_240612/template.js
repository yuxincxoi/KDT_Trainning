const tagComponent = (tagName, textNode) => {
  return `<${tagName}>${textNode}</${tagName}>`;
};

const container = () => {
  let today = new Date();
  let hour = today.getHours();
  // let min = today.getMinutes();

  let isAM = () => {
    if (hour < 12) {
      return "배가 고프댜 ㅜ";
    } else {
      return "밥을 먹었댜 !";
    }
  };

  return `
    ${tagComponent("header", `지금은 ${hour}시`)}
    ${tagComponent("main", isAM())}
    ${tagComponent("footer", "집 가고싶다 . . .")}
  `;
};

console.log(container());
