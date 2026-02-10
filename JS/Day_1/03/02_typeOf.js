// Important JavaScript Bugs & Rules

// ------------------------------------
// typeof operator
// typeof is BEST used for PRIMITIVE values

console.log(typeof null);   // "object" ❌ (JavaScript bug)
console.log(typeof []);     // "object"
console.log(typeof NaN);    // "number"

// ------------------------------------
// Why these results?

// typeof null → "object"
// This is a historical bug in JavaScript (from 1995)
// It cannot be fixed now because it would break old code.

// typeof [] → "object"
// Arrays are special objects in JavaScript.

// typeof NaN → "number"
// NaN is a special value inside the Number type.

// ------------------------------------
// Correct way to check types

Array.isArray([]); // true   ✅ BEST way to check array
Array.isArray({}); // false

// ------------------------------------
// IMPORTANT rule:
// Class names should start with CAPITAL letters
// Example: Array, Object, Date, Map, Set

// ------------------------------------
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
