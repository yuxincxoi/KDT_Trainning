const detail = document.getElementById("detail");
const createBtn = document.getElementById("createBtn");
const scheduleContainer = document.getElementById("scheduleContainer");
const timeBox = document.getElementById("timeBox");
const inputBox = document.getElementById("inputBox");
const title = document.createElement("input");
const time = document.createElement("input");
const place = document.createElement("input");
const memo = document.createElement("input");
const saveBtn = document.createElement("button");

// 24시간 표시
for (i = 0; i < 24; i++) {
  const times = document.createElement("div");
  timeBox.append(times);
  times.innerText = i + 1;
}

// input 요소들 append하기
inputBox.append(title, time, place, memo, saveBtn);

// '저장하기' 버튼의 id
saveBtn.id = "saveBtn";

// input 요소들의 name
title.name = "title";
time.name = "time";
place.name = "place";
memo.name = "memo";

// 서버로 form 전송하기 위한 설정
inputBox.action = "submit";
inputBox.method = "POST";

// '저장하기' 버튼 type
saveBtn.type = "submit";

// opne & close 이벤트
createBtn.addEventListener("click", () => {
  if (detail.style.height === "50px") {
    detail.style.height = "90vh";
    scheduleContainer.style.display = "flex";
  } else {
    detail.style.height = "50px";
    scheduleContainer.style.display = "none";
  }
});
