function checkSum() {
  var input = document.getElementById("numberInput").value;
  if (input.length !== 6 || !/^\d+$/.test(input)) {
    alert("Пожалуйста, введите 6 цифр.");
    return;
  }

  var firstSum = parseInt(input[0]) + parseInt(input[1]) + parseInt(input[2]);
  var secondSum = parseInt(input[3]) + parseInt(input[4]) + parseInt(input[5]);

  var resultElement = document.getElementById("result");
  if (firstSum === secondSum) {
    resultElement.textContent =
      "Сумма первых трех цифр равна сумме вторых трех цифр.";
  } else {
    resultElement.textContent =
      "Сумма первых трех цифр НЕ равна сумме вторых трех цифр.";
  }
}
