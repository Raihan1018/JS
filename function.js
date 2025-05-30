// /**
//  * function -> reuseable block of code
//  */

// function greet() {
//   // without parameter
//   console.log("Hi, Developer");
// }
// greet();

// function greet2(name, age) {
//   // with parameter -> name, age are the parameter
//   console.log(`Hello ${name}`);
//   console.log(`You are ${age} year's old`);
// }
// greet2("Raihan", 25); // passing name, age value, the value is called argument

// // parameter and return value
// // parameter -> input value in function
// // return -> output from a function

// function addNumbers(num1, num2) {
//   return num1 + num2;
// }

// console.log(addNumbers(10, 12444));
// console.log(addNumbers(1042, 1233));
// console.log(addNumbers(10, 13232));

// // arrow function -> smart and more useful function
// // const functionName = () => {}  skeleton of arrow function

// const multiply = (x, y) => {
//   return x * y;
// };
// console.log(multiply(4,3))

// if the function has small task then we can write in this way
// const sum = (a,b) => a +b;
// console.log(sum(2,5))

// function expression -> assign a function as a variable, here different is our function but we assign it in result variable
const different = (a, b) => a - b;
const result = different(334, 6);
console.log(`The result is: ${result}`);

// anonymous function in a callback
const friends = ["Alis", "Balis", "Calis", "Dalis", "Malis"];
friends.forEach((friend) => console.log(`Welcome ${friend}`));
