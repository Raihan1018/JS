// 
const users = [
  {
    name: "Alice Johnson",
    age: 28,
    isActive: true,
    email: "alice.johnson@example.com",
  },
  {
    name: "Brian Smith",
    age: 34,
    isActive: false,
    email: "brian.smith@example.com",
  },
  {
    name: "Clara Lee",
    age: 22,
    isActive: true,
    email: "clara.lee@example.com",
  },
];

const convertJSON = JSON.stringify(users)
// console.log(convertJSON)

const convertObject =JSON.parse(convertJSON)
console.log(convertObject)