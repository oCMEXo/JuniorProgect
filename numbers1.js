const object = {
  name: "Shasha",
  Age: 32,
  Car: "Pego",
  Hate: 180,
  weigth: 80,
};

for (let key in object) {
  console.log(`Свойство ${key} имеет значение ${object[key]}`);
}

console.log(Object.keys(object).length);

const { name, Age } = object;
console.log(name, Age);
