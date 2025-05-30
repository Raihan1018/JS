// this refer an object

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  gender: "Male",
  occupation: "Software Engineer",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }
};

console.log(person.fullName())
