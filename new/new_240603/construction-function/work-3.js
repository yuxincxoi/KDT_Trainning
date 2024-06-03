function workThree(index, name) {
  let local = {
    number: index + 1,
    name: name,
  };

  return local;
}

module.exports = workThree;
