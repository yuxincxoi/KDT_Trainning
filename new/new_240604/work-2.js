class WorkTwo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  set a(value) {
    if (typeof value === "number") {
      return (this._a = value);
    } else {
      throw new Error("a는 숫자만 입력 가능합니다.");
    }
  }

  set b(value) {
    if (typeof value === "number") {
      return (this._b = value);
    } else {
      throw new Error("b는 숫자만 입력 가능합니다.");
    }
  }

  add() {
    return this._a + this._b;
  }
}

// 객체 생성
let test = new WorkTwo(1, 2);

console.log(test);
console.log(test.add());

// 인스턴스 test의 타입이 WorkTwo이면 true
console.log(test instanceof WorkTwo);
