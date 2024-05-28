const detail = document.getElementById("detail");
const createBtn = document.getElementById("createBtn");
const timeBox = document.getElementById("timeBox");
const contents = document.getElementById("contents");
const scheduleBox = document.getElementById("scheduleBox");
const inputBox = document.getElementById("inputBox");
const what = document.createElement("input");
const when = document.createElement("input");
const where = document.createElement("input");
const memo = document.createElement("input");
const saveBtn = document.createElement("button");

detail.append(createBtn, timeBox, contents);
contents.append(scheduleBox, inputBox);
inputBox.append(what, when, where, memo, saveBtn);

saveBtn.id = "saveBtn";

what.name = "what";
when.name = "when";
where.name = "where";
memo.name = "memo";

inputBox.action = "submit";
inputBox.method = "POST";
saveBtn.type = "submit";

createBtn.addEventListener("click", () => {
  if (detail.style.height === "50px") {
    detail.style.height = "90vh";
    inputBox.style.display = "block";
  } else {
    detail.style.height = "50px";
    inputBox.style.display = "none";
  }
});
