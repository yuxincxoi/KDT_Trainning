// * 전개연산자, fon…in, arguments(반복자)
// * 함수 인자로 몇개가 들어와도 다 만들 수 있도록
// * this 사용 X

function workOne(...arguments) {
  let localVariable = {};

  // localVariable.a = a;
  // localVariable.b = b;
  // { a: "나는", b: "최유진" }

  // localVariable[a] = a;
  // localVariable[b] = b;
  // { "나는": "나는", "최유진": "최유진" }

  console.log(localVariable);
  console.log(arguments[0]);
}

workOne("나는", "최유진");
