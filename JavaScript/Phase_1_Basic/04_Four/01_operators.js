// Operators in JavaScript

// ------------------------------------
// Arithmetic Operators
// Used to perform mathematical operations

let a = 10;
let b = 3;

a + b; // 13  (addition)
a - b; // 7   (subtraction)
a * b; // 30  (multiplication)
a / b; // 3.33... (division)
a % b; // 1   (modulus - remainder)
a ** b; // 1000 (exponentiation)

// ------------------------------------
// Comparison Operators
// Used to compare two values
// Result is always true or false

10 == "10";   // true  (loose comparison)
10 === "10";  // false (strict comparison)
10 != 5;      // true
10 !== "10";  // true
10 > 5;       // true
10 < 20;      // true
10 >= 10;     // true
5 <= 3;       // false

// ------------------------------------
// Assignment Operators
// Used to assign values

let x = 10;
x += 5;  // x = x + 5 → 15
x -= 2;  // x = x - 2 → 13
x *= 2;  // x = x * 2 → 26
x /= 2;  // x = x / 2 → 13
x %= 3;  // x = x % 3 → 1

// ------------------------------------
// Logical Operators
// Used to combine multiple conditions

true && false; // false (AND)
true || false; // true  (OR)
!true;         // false (NOT)

// Example:
let age = 20;
age > 18 && age < 60; // true

// ------------------------------------
// Unary Operators
// Works on a single operand

let y = 5;

y++;   // increment
y--;   // decrement
++y;  //Increments first, then uses the value
--y;  //Decrements first, then uses the value.
+true; // 1  (type conversion)
+false;// 0
typeof y; // "number"
!y;    // false

// ------------------------------------
// Ternary Operator
// Short form of if-else
// Syntax:
// condition ? value_if_true : value_if_false

let marks = 80;

let result = marks >= 40 ? "Pass" : "Fail";
console.log(result);
