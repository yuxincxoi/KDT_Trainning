const createPerson = (callback) => {
  let person = {};
  callback(person, setName);
};

const setName = (person, callback) => {
  person.name = "최유진";
  callback(person, setAge);
};

const setAge = (person, callback) => {
  person.age = 23;
  callback(person, setJob);
};

const setJob = (person) => {
  person.job = "student";
  console.log(person);
};

createPerson((person, callback) => callback(person, setName));
