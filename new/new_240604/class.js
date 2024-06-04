class itsMe {
  // ! 매개변수가 없다 !
  constructor() {
    this.name = "최유진";
    this.age = 20;
    this.home = "대전";
  }
  sentence() {
    return this.name + "은 배고프다.";
  }
}

// JAVA의 변수 선언 방식
itsMe = new itsMe();

console.log(itsMe);
