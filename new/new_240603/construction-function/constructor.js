// 분류규격 라면볶음면 {
//   재료들(종류, 물, 추가재료) {
//     종류 : 라면종류;
//     물 : 물;
//     추가재료 : 추가재료;
//   }
// }

// * 생성자 함수(class) 방식
// * 객체에 이름(instance)이 붙어있음
// class ramen {
//   constructor(name, water, add) {
//     this.name = name;
//     this.water = water;
//     this.add = add;
//   }

//   set ramenName(name) {
//     if (name !== "진라면") {
//       console.error("진라면이 아니다 !");
//     }
//   }
// }

// let test = new ramen("신라면", "300ml", "고추장");
// console.log(test);

// * 일반 함수 방식
// * 일반 객체
function HyeonRamen(name, water, add) {
  if (name !== "진라면") {
    console.error("진라면이 아니여서 안할껴");
  } else {
    let local = {
      name: name,
      water: water,
      add: add,
    };
    return local;
  }
}

let test = HyeonRamen("신라면", "300ml", "고추장");
console.log(test);
