// DATES

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2022, 0, 22)
// let myCreatedDate = new Date(2022, 0, 22, 6, 35)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("01-14-2007")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDates = new Date()
// console.log(newDates);
// console.log(newDates.getMonth());
// console.log(newDates.getDay());

// `${newDates.getDay()} and the time`

newDates.toLocaleString('default', {
    weekday: "long"
})