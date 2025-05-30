// const now = new Date()
// console.log(now)

// // specific date and time
// const specificDateTime = new Date('2025-02-12T10:30:00')
// console.log(specificDateTime)

// const date = new Date();
// console.log(date);
// console.log("Get the year:", date.getFullYear());
// console.log("Get the Month:", date.getMonth() + 1); // here, +1 because all months in an array and an array is starting from 0, so we add +1
// console.log("Get the Day:", date.getDay());
// console.log('Hours:', date.getHours())
// console.log('Mins:', date.getMinutes())
// console.log('Seconds:', date.getSeconds())

// formatting date and time using local zone
// formatting date:
// const date = new Date()
// console.log(date.toDateString()) // local formate
// console.log(date.toDateString('en-GB')) // British formate
// console.log(date.toDateString('fr-FR')) // French formate

// // formate time
// console.log(date.toLocaleTimeString()) // local time
// console.log(date.toLocaleTimeString('en-GB')) // British time formate

// date time practical
function displayDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const hrs = now.getHours();
  const day = now.getDay();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();

  //   formatting
  const formateDate = `${day}-${month}-${year}`;
  const formateTime = `${hrs}:${mins}:${seconds}`;
  console.log(`Today's Date is: ${formateDate}`)
  console.log(`Current Time is: ${formateTime}`)
}

displayDateTime();
