const cart = [
  { name: "Laptop", price: 10, quantity: 1 }, 
  { name: "Mouse", price: 10, quantity: 2 }, 
  { name: "Keyboard", price: 60, quantity: 5 }, 
];

// step:1 => calculate total cost
const totalCost = cart.reduce((acc, item) => acc+ item.price, 0)
// console.log(`Without quantity price: ${totalCost}`)
const totalPrice = cart.reduce((acc, item)=> acc + item.price * item.quantity,0)
// console.log('Total price: ', totalPrice)

// step: 2 => get items that cost more than 50
const priceMore50 = cart.filter(item => item.price > 50)
// console.log(priceMore50)
const priceLess50 = cart.filter(item => item.price < 50)
// console.log(priceLess50)

// step: 3 => display item

const item = cart.map(item => console.log(item))
const itemName = cart.map(item => console.log(item.name))
const itemPrice = cart.map(item => console.log(item.price))
const itemQuantity = cart.map(item => console.log(item.quantity))