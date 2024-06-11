// 캡슐화
const a = (a, b, c) => {
  return {
    name: a,
    age: b,
    job: c,
  };
};

// console.log(a());

// 정적 할당
const b = a("최유진", 20, "student");
console.log("첫번째 : ", b);

// 동적 할당
b.address = "대전";
console.log("두번째 : ", b);
