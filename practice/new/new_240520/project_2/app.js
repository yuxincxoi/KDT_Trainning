const objectLoop = require("./module.objectLoop");
const data = require("./data.obj");

function forObject(a, b) {
  try {
    if (typeof a === "object") {
      if (typeof b === "object") {
        let values = [];

        objectLoop(values, a);
        objectLoop(values, b);

        console.log(values);
        let add = values.reduce((a, b) => {
          return a + b;
        });
        console.log("다 더한값 : ", add);
      }
    }
  } catch (error) {
    console.log(error);
    console.log("안됨요");
  }
}

forObject(data.a, data.b);
