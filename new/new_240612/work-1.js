class BasicData {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  set Name(name) {
    if (typeof name === "string") {
      this._name = name;
    }
  }
  get Name() {
    return this._name;
  }

  set Age(age) {
    if (typeof age === "number") {
      this._age = age;
    }
  }
  get Age() {
    return this._age;
  }

  set Job(job) {
    if (typeof job === "string") {
      this._job = job;
    }
  }
  get Job() {
    return this.job;
  }
}

const component = () => {
  let obj = new BasicData("최유진", 20, "개발자");

  if (obj instanceof BasicData) {
    return `
    이름 : ${obj.name},
    나이 : ${obj.age},
    직업 : ${obj.job}
    `;
  } else {
    throw new Error();
  }

  const decision = () => {};
};

console.log(component());

return `<html></html>`;
