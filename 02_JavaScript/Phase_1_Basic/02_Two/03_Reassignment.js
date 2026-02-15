// Reassignment vs Redeclaration
// Reassignment  -> changing the VALUE of a variable
// Redeclaration -> declaring the SAME variable name again

// ------------------------------------
// var

// Redeclaration → ✅ Allowed
var a = 10;
var a = 20;   // redeclaration
console.log(a); // 20

// Reassignment → ✅ Allowed
a = 30;
console.log(a); // 30

// ------------------------------------
// let

// Redeclaration → ❌ NOT allowed (in same scope)
let b = 10;
// let b = 20;   ❌ SyntaxError

// Reassignment → ✅ Allowed
b = 25;
console.log(b); // 25

// ------------------------------------
// const

// Redeclaration → ❌ NOT allowed
const c = 10;
// const c = 20; ❌ SyntaxError

// Reassignment → ❌ NOT allowed
// c = 30;       ❌ TypeError