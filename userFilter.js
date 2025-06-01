// userFilter.js

const users = [
  {
    name: "Alice Johnson",
    age: 25,
    isActive: true,
    email: "alice.johnson@example.com",
  },
  {
    name: "Brian Smith",
    age: 17,
    isActive: false,
    email: "brian.smith@example.com",
  },
  {
    name: "Clara Lee",
    age: 19,
    isActive: true,
    email: "clara.lee@example.com",
  },
];


// step 1 => filter active users over 18 years old
const activeUsers = users.filter(user => user.isActive && user.age > 18)
// console.log(activeUsers)

// step 2 => user email
const userEmails = users.map(user => user?.email)
console.log(emails)