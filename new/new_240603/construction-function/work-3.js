function workThree(a, b) {
  // let local = {};
  // local[a] = "a";
  // local[b] = "b";
  // return local;

  return {
    a: a,
    b: b,
  };
}

const test = workThree("점심시간 ", "한시간 남음");
console.log(test);
