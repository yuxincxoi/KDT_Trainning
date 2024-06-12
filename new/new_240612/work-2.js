const component = () => {
  let obj = {
    name: "최유진",
    age: 20,
    job: "개발자",
  };

  let innerFunc = () => {
    if (obj.age >= 20) {
      return "여름엔 역시 맥주가 최고지 !";
    } else {
      return "여름엔 역시 요구르트가 최고지 !";
    }
  };

  let anotherFunc = () => {};

  return `
  <h1>${obj.name}</h1>
  <h2>${innerFunc()}</h2>
  `;
};
