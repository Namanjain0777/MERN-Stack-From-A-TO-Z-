// Scope 
// matlab kaha tak variable accessible hai

// Types of Scope
// Global Scope
let a = 10;

function test() {
    console.log(a); // accessible
}
// a har jagah accessible hai.


// Function Scope
function test() {
    let b = 20;
    console.log(b);
}

test();
// console.log(b); // ❌ ReferenceError
// b sirf function ke andar accessible hai.

// Block Scope(Let & Const)
{
    let x = 100;
}

console.log(x); // ❌ ReferenceError





