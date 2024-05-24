// 정적
function a(a, b) {
  return a + b;
}

// 동적(callback)
function b(a, b, callback) {
  callback(a, b);
}
b(1, 2, function (a, b) {
  console.log(a + b);
});

console.log(
  b(1, 2, function (a, b) {
    console.log(a + b);
  })
);

// a, b가 숫자면 곱셈, 아니면 덧셈
function hi(a, b, callback) {
  callback(a, b);
}

// if (typeof a == Number && typeof b == Number) {
//   hi("h", "i", function (a, b) {
//     console.log(a * b);
//   });
// } else {
//   hi("h", "i", function (a, b) {
//     console.log(a + b);
//   });
// }

hi(3, 2, (a, b) => {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a * b);
  } else {
    console.log(a + b);
  }
});
