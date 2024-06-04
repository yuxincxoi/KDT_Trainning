// * 외부에서 보는 this
console.log("밑도 끝도 없는 this : ", this);

// * 함수 안에서 보는 this
function workThree(a, b) {
  console.log("함수 안에 this : ", this);
  return a + b;
}
console.log(workThree(1, 2));

let itsMe = {
  name: "최유진",
  age: 20,
  home: "대전",
  // * 리터럴로 보는 this
  test: this,
  // * 메서드로 보는 this
  sentence: function () {
    return this.name + "은 배고프대.";
  },
};
console.dir("객체에서 보는 this", itsMe);
console.log("메서드로 보는 this : ", itsMe.sentence());
