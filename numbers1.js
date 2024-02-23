function first(callback) {
  console.log("Hello");
  callback();
}

function second() {
  console.log("World");
}

first(second);
// Сallback function