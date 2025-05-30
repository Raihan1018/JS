// const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// daysOfWeek.forEach((day) => console.log(day))

// console.log(daysOfWeek[0])
// console.log(daysOfWeek[1])
// console.log(daysOfWeek[2])
// console.log(daysOfWeek[3])
// console.log(daysOfWeek[4])
// console.log(daysOfWeek[5])
// console.log(daysOfWeek[6])
// console.log(daysOfWeek[7]) // undefined because our array length is 7

// array methods: 
// push() -> add an element in the last of the array
// const numbers = [1,2,3]
// console.log(numbers)
// numbers.push(4)
// numbers.push(5)
// numbers.push('JavaScript')
// numbers.push(false)
// console.log(numbers)

// pop() -> remove an element from the last

// const languages = ['C++', 'Python', 'Java', 'JS']
// console.log(languages.length)
// const removeElement = languages.pop()
// console.log(languages.length)
// console.log(languages)
// console.log(languages.pop())
// console.log(languages)

// shift() -> remove an element from the 0 index of an array
// const cities = ["New York", "London", "Tokyo"];
// console.log(cities.shift())
// console.log(cities)

// // unshift() -> add an element in the 0 index
// const course = ['Science', 'English', "Math"];
// console.log(course.unshift('History'))
// console.log(course)


/**
 @summary
 1. push() -> add an element in the last index
 2. pop() -> remove an element in the last index
 3. shift() -> remove an element in the 0 (zero) index
 4. unshift() -> add an element in the 0 (zero) index
 */

 /**
  * for add:
  *     push() -> add in the last
  *     unshift() -> add in the 1st
  * for remove:
  *     pop() -> remove from the 1st
  *     shift() -> remove from the last
  */

/**
 * add
 * push in the last
 * unshift in the 1st
 * 
 * remove
 * pop in the last
 * shift in the 1st
 */


const countries = ["Bangladesh", "India", "USA"];

let arrayLength = countries.length
console.log(countries.push('UK'))
console.log(countries)
console.log(countries.unshift('UAE'))
console.log(countries)

console.log(countries.pop())
console.log(countries)
console.log(countries.shift())
console.log(countries)