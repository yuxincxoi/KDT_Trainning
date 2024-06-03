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
    if (typeof value !== "string" && value.length <= 1) {
      console.error("잘못된 이름입니다.");
    } else {
      this._name = value;
    }
  }

  set age(value) {
    if (typeof value === "number") {
      this._age = value;
    }
  }

  set address(value) {
    if (typeof value === "string") {
      this._address = value;
    }
  }

  set email(value) {
    if (
      typeof value !== "string" &&
      (value.indexOf("@") === -1 || value.indexOf(".") === -1)
    ) {
      console.error("이메일 형식이 아닙니다.");
    } else {
      this._email = value;
    }
  }

  set favorite(value) {
    if (typeof value === "string") {
      this._favorite = value;
    }
  }

  set hate(value) {
    if (typeof value === "string") {
      this._hate = value;
    }
  }
}

const test = new itsMe(
  "최유진",
  28,
  "대전",
  "abc@email.com",
  "노래하기",
  "소세지"
);

console.log(test);
console.log(test._name);
console.log(test._age);
console.log(test._address);
console.log(test._email);
console.log(test._favorite);
console.log(test._hate);
