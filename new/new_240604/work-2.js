class WorkTow {
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
}

// 객체 생성
let test = new WorkTow(1, 2);

console.log(test);
