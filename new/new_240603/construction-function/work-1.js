// * 이 파일은 기본 함수 연습 파일입니다.
// * 목적 : 함수에 대한 이해
// * 매개변수가 객체인 경우

function workOne(a, b) {
  // * logic : 매개변수 두 개 받기
  // * logic : return은 객체

  let localVariable = {};

  localVariable[a] = a;
  localVariable[b] = b;

  return localVariable;
}

const test = workOne("나는", "최유진");
console.log(test);
