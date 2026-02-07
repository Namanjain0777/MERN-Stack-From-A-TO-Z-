// Objects in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile).
// Key-Value Structure
// key can be of any type

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

