// // * version 1
// function forObject(a, b) {
//   if (typeof a === "object") {
//     if (typeof b === "object") {
//       console.log("a, b 매개변수 모두 객체입니다.");
//     } else {
//       console.error("객체 아님");
//     }
//   } else {
//     console.log("객체 아님");
//   }
// }

// // * version 2 - 위에처럼 쓰기 싫어서 만든 문법
// function forObject(a, b) {
//   // try만 보면 된다 -> "원하는게 아니면 다 에러처리 해줘."
//   try {
//     if (typeof a === "object") {
//       if (typeof b === "object") {
//         console.log("a, b 매개변수 모두 객체입니다.");
//       }
//     }
//   } catch (error) {
//     // 보통 (error)는 자동으로 만들어짐(콘솔에 찍으면 에러 확인 가능)
//     // 코드가 길어질 땐 예외처리 고려
//     console.log(error);
//     console.log("안됨요");
//   }
// }

// const a = {};
// const b = new Object();

// forObject(a, b);

function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        // key가 리터럴값이기 때문에 전제조건이 까다롭다 -> 모르는 경우가 더 많아서
        let values = [];
        // key값을 확인해주는 과정
        // for...in문을 통해 객체 반복
        // for in -> 무조건 객체
        // ? for...in문
        for (let key in a) {
          values.push(a[key]);
        }
        for (let key in b) {
          values.push(b[key]);
        }
        console.log(values);

        // * version 1
        // let add = value[0] + value[1];

        // * version 2
        // version 1보다 아아아주 자바스크립트스러운 문법
        // ? reduce
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한 값 : ", add);
      }
    }
  } catch (error) {
    console.log(error);
    console.log("객체 아님");
  }
}

// 이렇게도 초기화 선언 가능함 like 자바
const a = { first: 1 };
const b = { first: 2 };

forObject(a, b);
