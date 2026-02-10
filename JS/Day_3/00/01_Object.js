// Objects in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile).
// Key-Value Structure
// key can be of any type
// Singleton

let student = {
    name : "Naman",
    age : "21",
    Skills : "PYTHON , JAVA , JS",
    1 : "Pizza",
    // food : [PIZZA  , BURGER]
}
// Dot vs Bracket Notation
// Dot notation → fixed property name
// Bracket notation → dynamic property name (variable)
console.log(student.name)
// console.log(student[name])
console.log(student)

let aa = "name";

// obj.aa  //it will search in obj
student[aa]="Balla balla";
console.log(student)

// ️ Nesting and Deep Access
let user = {
    name: "Naman",
    address: {
        city: "Delhi",
        pincode: 110091
    }
};
console.log(user.address.city); // Delhi

// Object Destructuring

let { name, age } = student;
console.log(name , age);
// For nested objects:
let {city , pincode} = user.address;
console.log(city , pincode)

let jsUser = {
    name: "Naman",
    email: "naman@gmail.com",
    isLoggedIn: false
}

jsUser.email = "ballaballa@gmail.com";
console.log(jsUser);
jsUser.greeting = function() {
    console.log("Hello");
}
console.log(jsUser);
// console.log(jsUser.greeting);   //[Function (anonymous)]
console.log(jsUser.greeting());  //Hello and undefined
// why undefined? because function doesn't return anything
// but it prints Hello because console.log is inside the function

jsUser.greetingTwo = function() {
    console.log(`Hello ${this.name}`);
}
console.log(jsUser.greetingTwo());

// Object.freeze(student)
// student.name = "Balla balla";
// console.log(student)