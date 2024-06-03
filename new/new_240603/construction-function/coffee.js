class MakeCoffee {
  constructor(bean, water, sugar, milk) {
    this.bean = bean;
    this.water = water;
    this.sugar = sugar;
    this.milk = milk;
  }
}

let test = new MakeCoffee("가나", "200ml", false, false);
console.log(test);
