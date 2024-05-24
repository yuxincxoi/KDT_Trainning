const studentNamesArray = require("./names-data.js");
const trueArray = Array.from(studentNamesArray);

trueArray.forEach((name) => {
  console.log(name);
});

// for
// function na(array) {
//   for (let i = 0; i < array.length; i++) {
//     let name = array[i];
//     console.log(name);
//   }
// }
