class itsMe {
  constructor(name, age, address, email, favorite, hate) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.email = email;
    this.favorite = favorite;
    this.hate = hate;
  }

  set name(value) {
    if (value.length <= 1) {
      console.error("잘못된 이름입니다.");
    } else {
      this._name = value;
    }
  }
}

const test = new itsMe("최유진");
console.log(test);
console.log(test._name);
