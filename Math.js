// Math Operation

//  1.Math.round() -> to make a floating number to a nearest integer
// if the number is >= 0.5 -> convert to nearest upper number or lower number
// let num1 = 2.99;
// console.log(Math.round(num1));


// Math.ceil() -> convert upper 0.5 value
// let num2 = 4.2;
// console.log(Math.ceil(num2))

// Math.floor() -> convert lower 0.5 value
// const num3 = 4.4
// console.log(Math.floor(num3))


/**
 * random number generator 
 * 1. generate OTP
 * 2. user unique ID
 * ----
 * by default it generate numbers between 0 to 1
 * 
 */



// let randomNumber2 = Math.floor(Math.random() * 10 + 1) // between 0 to 10
// here 10 means upper range, random number will be 0 to 10 (upper range). If we want to generate from 1 then we will add extra +1, it means generated number +1 => that means we will never get 0
// console.log(randomNumber2)


// Math.max() -> return the largest number
/**
 * use
 * 1. highest number
 * 2. quiz app
 * 3. temperature
 */
// const x = 112;
// const y = 13;
// const z = 12;
// const maxNumber = Math.max(x,y,z)
// // console.log(maxNumber)
// // console.log(`Max number is ${Math.max(x,y,z)}`)

// // operation in with an array
// const numbers = [2,3,53,3,4,23,33]
// console.log(`Largest Number is: ${Math.max(...numbers)} `) // ... -> spread operator. it's copy the array

// console.log(`Lowest number is" ${Math.min(...numbers)}`)



// toFixed()
// const price = 34.76543456787653
// console.log(price.toFixed(4)) // here, 4 means after ( . ) how many numbers you want



// parseInt() -> convert string (only digits) to a numbers
const st1 = '443'
console.log(`Before converting -> ${typeof(st1)}`)
console.log(parseInt(st1))
