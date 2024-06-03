function workThree(index, name) {
  let local = {
    number: index + 1,
    name: name,
  };

  return local;
}

const test = workThree(28, "최유진");
console.log(test);
