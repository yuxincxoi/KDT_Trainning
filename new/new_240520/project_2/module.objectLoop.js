function objectLoop(array, object) {
  for (let key in object) {
    array.push(object[key]);
  }
}

// objectLoop(values, a);
// objectLoop(values, b);

module.export = objectLoop;
