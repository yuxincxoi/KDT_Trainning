const detail = document.getElementById("detail");
const createBtn = document.createElement("button");
const inputBox = document.createElement("form");
const titleInput = document.createElement("input");
const timeInput = document.createElement("input");
const placeInput = document.createElement("input");
const memoInput = document.createElement("input");
const saveBtn = document.createElement("button");

detail.append(createBtn, inputBox);
inputBox.append(titleInput, timeInput, placeInput, memoInput, saveBtn);

createBtn.id = "createBtn";
inputBox.id = "inputBox";
saveBtn.id = "saveBtn";

titleInput.name = "title";
timeInput.name = "time";
placeInput.name = "place";
memoInput.name = "memo";

// inputBox.action = "submit";
inputBox.action = "submit";
inputBox.method = "POST";
saveBtn.type = "submit";

createBtn.addEventListener("click", () => {
  detail.style.width = "50px";
});
