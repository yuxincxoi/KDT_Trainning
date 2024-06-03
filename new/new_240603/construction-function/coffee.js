class MakeCoffee {
  constructor(bean, water, suger) {
    this.bean = bean;
    this.water = water;
    this.suger = suger;
  }
  // * ************** 규격 만들기 **************

  //* bean
  set bean(value) {
    // * 규격에 맞지 않으면 아예 객체에 포함되지 않음
    if (typeof value === "string") {
      this._bean = value;
      // * 관례적으로 언더바를 붙임 -> setting을 통과한 값이라는 표시
      // this.coffeeBean = value;
    } else {
      console.error("bean은 문자열이어야 합니다.");
    }
  }
  get bean() {
    return this._bean + "산";
  }

  // * water
  set water(value) {
    if (typeof value === "number") {
      this._water = value;
    } else {
      console.error("bean은 문자열이어야 합니다.");
    }
  }
  get water() {
    return this._water + "ml";
  }

  // * suger
  set suger(value) {
    if (typeof value === "boolean") {
      this._suger = value;
    } else {
      console.error("suger은 bool이어야 합니다.");
    }
  }
  get suger() {
    if (this._suger === true) {
      return "단맛";
    } else {
      return "쓴맛";
    }
  }
}

let test = new MakeCoffee("에티오피아", 200, false);
console.log(test);
console.log(test.bean);
console.log(test.water);
console.log(test.suger);
// get bean()이 없다면
// console.log(test._bean);
