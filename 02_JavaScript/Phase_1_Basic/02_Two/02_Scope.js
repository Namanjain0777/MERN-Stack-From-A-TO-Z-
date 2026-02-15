// Scope (Global, Block, Function)
// Scope decides where a variable can be accessed in the code.

// Global Scope
// A variable declared outside any function or block
// is in the global scope.
// It can be accessed from anywhere in the program.

var a = 12;   // global scope
function testGlobal() {
    console.log(a); // ✅ accessible
}


// ------------------------------------
// Block Scope
// A block is anything inside { }
// ONLY let and const are block-scoped.
// var is NOT block-scoped (this is very important).

{

    let b = 12;   // block scope
    const c = 20; // block scope
    console.log(b); // ✅ accessible inside block
}

// console.log(b); ❌ Error: b is not defined
// console.log(c); ❌ Error: c is not defined

// IMPORTANT:
// var does NOT follow block scope
{
    var d = 50;
}
console.log(d); // ✅ accessible (because var is function/global scoped)

// ------------------------------------
// Function Scope
// Variables declared inside a function are accessible
// ONLY inside that function.

function exampleFunction() {
    var x = 10;
    let y = 20;
    const z = 30;

    console.log(x, y, z); // ✅ accessible
}

// console.log(x); ❌ Error
// console.log(y); ❌ Error
// console.log(z); ❌ Error