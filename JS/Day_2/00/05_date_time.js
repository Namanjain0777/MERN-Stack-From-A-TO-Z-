// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let myCraeetDate =  new Date(2023,0,23,5,3);
let myCraeetDate2 =  new Date(2023,0,23);
let myCraeetDate3 =  new Date("2023-01-17");
let myCraeetDate4 =  new Date("01-14-2025");

// console.log(myCraeetDate.toLocaleString());
// console.log(myCraeetDate2.toLocaleString());
// console.log(myCraeetDate3.toLocaleString());
// console.log(myCraeetDate4.toLocaleString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCraeetDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

console.log(`${newDate.getDay()} ${newDate.getMonth()+1} ${newDate.getFullYear()}`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
}));



