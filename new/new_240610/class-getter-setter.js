// Person 클래스 정의
class Person {
  constructor() {
    // 속성 정적으로 초기화
    this._name = "";
    this._age = 0;
    this._job = "";
  }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }

  get age() {
    return this._age;
  }

  set job(value) {
    this._job = value;
  }

  get job() {
    return this._job;
  }
}

const person = new Person();
person.name = "최유진";
person.age = 26;
person.job = "student";

console.log("Name: ", person.name);
console.log("Age: ", person.age);
console.log("Job: ", person.job);
