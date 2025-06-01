function checkAge(age) {
  if (age < 18) {
    throw new Error("You are not eligible to vote");
  }
  console.log("You are voter");
}
try {
  checkAge(23);
} catch (error) {
  console.error(`Error: ${error}`);
}
