// const student = {
//   name: "Raihan",
//   age: 26,
//   subjects: ["Math", "Physics", "Chemistry", "ICT"],
//   greet: function () {
//     console.log(`Hello, I am ${student.name} and ${student.age} year's old`);
//   },
// };

// student.greet();

/**
 * to access an object element 2 ways are here:
 *  1. dot notation => (objectName.propertyName) -> almost all case without bracket notation.
 *  2. bracket notation => objectName['propertyName] -> for dynamic/ special characters accessing
 */

const book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  pages: 180,
};

// console.log(book.title) // dot notation
// console.log(book['title']) // bracket notation
console.log(book.author)
console.log(book.pages)

// update or modify property
book.pages = 200;
console.log(book.pages)
book['title'] = 'New title'
console.log(book.title)

// add new property
book.price = 34
console.log(book.price)
book['publishYear'] = 2025
console.log(book.publishYear)