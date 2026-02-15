// Temporal Dead Zone (TDZ) - utna area jitne mein js ko pata to hai ki variable exist karta hai par wo aapko value nahi de sakta


// Temporal Dead Zone is the time between
// entering a scope and
// declaring a variable using let or const.

// During TDZ, the variable exists in memory
// BUT cannot be accessed until it is declared.

// ------------------------------------
// Example with let

console.log(a); // ❌ ReferenceError
let a = 10;

// The code above fails because:
// - 'a' is in Temporal Dead Zone
// - It is hoisted but not initialized

// ------------------------------------
// Example with const

console.log(b); // ❌ ReferenceError
const b = 20;
// const also has TDZ

// ------------------------------------
// Example with var (NO TDZ)

console.log(c); // ✅ undefined
var c = 30;

// var is hoisted and initialized with undefined
// so no Temporal Dead Zone

// ------------------------------------
// Visual timeline (important)

// let x;
// TDZ starts here
// ❌ cannot access x
// x = 10;
// TDZ ends here

// ------------------------------------
// Why TDZ exists?
// To prevent bugs caused by accessing variables
// before they are properly declared.

// ------------------------------------
// TDZ with block scope

{
    // TDZ starts
    // console.log(d); ❌ ReferenceError
    let d = 40;
    // TDZ ends
}

// ------------------------------------
// Key points to remember:

// 1. TDZ applies to let and const
// 2. var does NOT have TDZ
// 3. Accessing let/const before declaration causes ReferenceError
// 4. TDZ exists from start of scope till declaration line