const component = () => {
  let obj = {
    name: "최유진",
    age: 20,
    job: "개발자",
  };

  let innerFunc = () => {};

  return `
  <h1>${obj.name}</h1>
  `;
};
