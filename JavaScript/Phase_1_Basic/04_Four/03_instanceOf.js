// instanceof operator
// Used for REFERENCE (non-primitive) values
// Checks prototype chain

// Syntax:
// variable instanceof Constructor

let a = [];
console.log(a instanceof Array);  // true
console.log(a instanceof Object); // true (Array inherits from Object)

let b = {};
console.log(b instanceof Object); // true
console.log(b instanceof Array);  // false