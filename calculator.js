const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiplication: function (num1, num2) {
    return num1 * num2;
  },
  division: function (num1, num2) {
    if (num2 === 0) {
      return "Can not divide by zero";
    } else {
      return Math.round(num1 / num2).toFixed(3);
    }
  },
};

console.log(calculator.add(10, 0));
console.log(calculator.subtract(10, 0));
console.log(calculator.multiplication(10, 0));
console.log(calculator.division(10, 0));
console.log(calculator.division(10, 220));
