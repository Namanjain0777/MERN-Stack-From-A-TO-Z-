// Object Destructuring
const uzer2 = {
  name: "Naman",
  age : 22
};

const { name, city = "Delhi" } = uzer2;

console.log(name); // Naman
console.log(city); // Delhi

// Rename while destructuring
let { name: userName, age: userAge } = uzer2;

console.log(userName); // Naman
console.log(userAge);  // 22


// Nested destructuring
// let {
//     address: {  pincode }
// } = uzer2;

// console.log(pincode); // 302001

let { gender = "Male" } = uzer2;
console.log(gender); // Male