console.log(true + false);
console.log(null + 1);
console.log(5 + "5");
console.log(!!undefined);
console.log(undefined + 1);  // NaN

// Why NaN === "number"

// NaN stands for "Not a Number".
// It represents a FAILED mathematical operation.

// Even though it means "Not a Number",
// NaN's TYPE is actually "number".
// 1. NaN is NOT equal to anything (even itself)
// 2. To check NaN, NEVER use == or ===
// Use Number.isNaN()


// Undefined vs Null
// Undefined
// Undefined means a variable is declared
// but NOT assigned any value.
// JavaScript automatically assigns undefined.

// Null
// Null means "intentional absence of value".
// It is assigned by the developer manually.
// Null represents "nothing" or "empty".


console.log(null + 1);  //1
console.log("5" + 3);   //53
console.log("5" - 3);   ///2
console.log(true + false);   //1

console.log(typeof []);  //object
console.log(typeof null); //object
console.log(typeof 123n); //bigInt

console.log(Boolean(0)); // falsy
console.log(Boolean("0")); // truthy
console.log(Boolean([])); // truthy
console.log(Boolean(undefined));// falsy

// Write a function isEmpty(value) that checks if a given value is null , undefined , or ""
function isEmpty(value) {
    return value === null || value === undefined || value === "";
}
// value == null checks both null and undefined
console.log("Let see")
console.log(isEmpty(null));

console.log(5 == "5"); // true
console.log(5 === "5"); // false
