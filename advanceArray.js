// // advanceArray.js

// /**
//  * Map -> make a new array according to the original array. original array will ot be change.
//  * Filter
//  * Reduce
//  * find()
//  * some()
//  */

// // Map
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // original array
// // console.log(numbers)
// const square = numbers.map((number) => number ** 2); // copy version of the original array
// // console.log(square);

// // filter
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// // console.log(evenNumbers);

// // reduce => produce a single value (sum, total, product price)
// const productPrice = [10, 32, 42, 45, 53, 99];
// const totalPrice = productPrice.reduce(
//   (accumulator, current) => accumulator + current,
//   0
// );
// // console.log(totalPrice);

// // find()
// const users = [
//   {
//     name: "Alice Johnson",
//     age: 17,
//   },
//   {
//     name: "Bob Smith",
//     age: 22,
//   },
//   {
//     name: "Charlie Davis",
//     age: 19,
//   },
// ];

// /**
//  *goal
//  *1. find a user who is 25 years old
//  */

// //  1
// const findUser = users.find((user) => user.age == 18);
// // console.log(findUser);
// const filterUser = users.filter((user) => user.age >= 18);
// // console.log(filterUser)

// // some

const products = [
  {
    name: "Book",
    price: 30,
  },
  {
    name: "Pen",
    price: 330,
  },
  {
    name: "Laptop",
    price: 200,
  },
];

const hasExpensiveItem = products.some(product => product.price > 200)
// console.log(hasExpensiveItem)

const totalPrice2 = products.reduce((acc, product) => acc + product.price, 0)
console.log(totalPrice2)