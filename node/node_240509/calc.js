function calc(a, b, callback) {
  callback(a, b);
}

calc(10, 20, function (a, b) {
  let result = a + b;
  return result;
});

calc(10, 20, function (a, b) {
  let result = a - b;
  return result;
});
