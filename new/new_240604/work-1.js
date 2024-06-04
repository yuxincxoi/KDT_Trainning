function workOne(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    let local = a + b;
    return local;
  } else {
    console.error("매개변수가 잘못 작성되었습니다.");
  }
}
