function work(string) {
  // 이렇게하면 네 개의 코드가 다 실행됨 (구분 X)
  // console.log(string);
  try {
    if (typeof string === "string") console.log(string);
  } catch (error) {
    console.log("Error !");
  }
}

work("안녕");
work(1);
work(true);
work({ name: "공욱재" });
