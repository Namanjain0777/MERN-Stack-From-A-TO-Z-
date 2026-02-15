// Chapter 1: Variables & Keywords

// Variables : Variables are containers that hold data in memory.

a = "I am Global Variable";
// We can use this but it is not a good practice
// Js will create a global variable

// Ways to declare variables in JavaScript:
// var vs let vs const


// Var -> ES5
var a = 10;
console.log(a);
{
    var a = 20;
    console.log(a);
}
console.log(a);
// it can be use anywhere throughtout the code
// It can be redeclared ((BIG PROBLEM))
// It can be updated
// its function scoped
// its added to the window object(in browsers)
// window.a ->  10

var b;   //Declaration (Memory Reserved)
b = 20;  //Initialization (first value assigned)
b = 30;  //Reassignment (second value assigned)

var c = 30; //Declaration + Initialization(first value assigned)

// Problem : Can be redeclared and Hoisting issues

console.log("Now--------------------Let");
// let ->ES6
let d = 40;
console.log(d);
{
    let d = 50;
    console.log(d);
}
console.log(d);
// // let d = 13;   ❌ SyntaxError: Identifier 'd' has already been declared
d = 15;
console.log(d);

// let is more secure than var
// let is block scoped
// let is NOT added to window object
// let allows reassignment
// let does NOT allow redeclaration in same scope

// Const -> ES6
// const is used when value should NOT change
// const is block scoped
// const is NOT added to window object
// const does NOT allow redeclaration
// const does NOT allow reassignment

const e = 60;
console.log(e);
// const e = 70;   ❌ SyntaxError: Identifier 'e' has already been declared

// const variable MUST be initialized at declaration time
// const f;   ❌ SyntaxError: Missing initializer in const declaration

// ------------------------------------
// Summary:

// var   → function scoped, redeclare allowed, unsafe
// let   → block scoped, redeclare not allowed, safe
// const → block scoped, redeclare & reassign not allowed, safest
// const doesn't make things fully constant. It protects the variable, not the value.


// ❌ Avoid var
// ✅ Use let when value changes
// ✅ Use const by default