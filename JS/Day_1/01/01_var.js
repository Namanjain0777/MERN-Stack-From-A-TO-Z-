// Chapter 1: Variables & Declarations

// Variable:
// Variables are containers that hold data in memory.

// Example (works but NOT recommended):
a = "I am variable"; 
// This works because JS puts it in global scope automatically.
// ❌ Bad practice (can cause bugs, avoid this)

// ------------------------------------
// Ways to declare variables in JavaScript:
// var, let, const

// var  → ES5
// let, const → ES6

// ------------------------------------
// var keyword

// var can be used anywhere throughout the program
// var is function scoped
// var is added to the window object (in browsers)
// var allows redeclaration
// var allows reassignment

var userName = "Naman";
var num;
num = 69;

// Declaration vs Initialization
var b;        // Declaration (memory reserved)
var b = 12;   // Declaration + Initialization (first value assigned)

// var is added to window object
// Example (browser):
// window.userName → "Naman"

// Redeclaration is allowed (BIG PROBLEM)
var c = 12;
var c = 13;
console.log(c); // 13

// ❌ Problems with var:
// 1. No block scope
// 2. Can be redeclared (causes confusion)
// 3. Hoisting issues
// 4. Bugs in large codebases

// ------------------------------------
// let keyword

// let is more secure than var
// let is block scoped
// let is NOT added to window object
// let allows reassignment
// let does NOT allow redeclaration in same scope

let d = 12;
// let d = 13;   ❌ SyntaxError: Identifier 'd' has already been declared
d = 15;         // ✅ allowed (reassignment)
console.log(d);

// ------------------------------------
// const keyword

// const is used when value should NOT change
// const is block scoped
// const is NOT added to window object
// const does NOT allow redeclaration
// const does NOT allow reassignment

const discount = 12;
// discount = 20; ❌ TypeError: Assignment to constant variable
console.log(discount);

// NOTE:
// const variable MUST be initialized at declaration time
// const x; ❌ Error

// ------------------------------------
// Summary:

// var   → function scoped, redeclare allowed, unsafe
// let   → block scoped, redeclare not allowed, safe
// const → block scoped, redeclare & reassign not allowed, safest
// const doesn't make things fully constant. It protects the variable, not the value.
// Best Practice:
// ❌ Avoid var
// ✅ Use let when value changes
// ✅ Use const by default

    
