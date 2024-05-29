const detail = document.getElementById("detail");
const createBtn = document.getElementById("createBtn");
const scheduleContainer = document.getElementById("scheduleContainer");
const timeBox = document.getElementById("timeBox");
const contents = document.getElementById("contents");
const timeLine = document.getElementById("timeLine");
const inputBox = document.getElementById("inputBox");
const title = document.createElement("input");
const time = document.createElement("input");
const place = document.createElement("input");
const memo = document.createElement("input");
const saveBtn = document.createElement("button");

for (i = 0; i < 24; i++) {
  const times = document.createElement("div");
  timeBox.append(times);
  times.innerText = i + 1;
}

inputBox.append(title, time, place, memo, saveBtn);

saveBtn.id = "saveBtn";

title.name = "title";
time.name = "time";
place.name = "place";
memo.name = "memo";

inputBox.action = "submit";
inputBox.method = "POST";
saveBtn.type = "submit";

createBtn.addEventListener("click", () => {
  if (detail.style.height === "50px") {
    detail.style.height = "90vh";
    scheduleContainer.style.display = "flex";
  } else {
    detail.style.height = "50px";
    scheduleContainer.style.display = "none";
  }
});
