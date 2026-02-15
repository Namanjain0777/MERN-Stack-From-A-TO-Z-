// primitives datatypes
// ' ' - Single qoutes
// " " - double qoutes
// ` ` -   backticks

// string -> can be stored in any qoutes
let name = "Naman";

// number
let a = 9 ;
let b = 9.5; 
console.log(Number.MAX_SAFE_INTEGER);
// JS can accurately represent integers only up to a limit
// JavaScript can represent it exactly, without losing precision.

// Boolean
let c = true;
let d = false;

// Null
// iska matlab hai aapne jaan boojh kar koi value nahi di

// Undefined
// iska matlab ki aapne ek variable banaya aur usey value nahi di to jo value by defauly mili wo hai undefined

// Symbol
// unique immutable value 
// future hein hum koi libraries use kareg ab is case mein un libraries mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hui fields us library ki original fields ko change kar deta hai

let e = Symbol("uid");
let f = Symbol("uid");
console.log(e==f);  //false

// bigint
let g = 9007199254740991n;
g + 3n;
console.log(g);

console.log("Now Reference Datatype")
// reference datatypes
// Arrays
let aa = [1,2,3];
let bb = aa;
bb.push(4);
console.log(aa);  //[ 1, 2, 3, 4 ]
console.log(bb);  //[ 1, 2, 3, 4 ]

// Object
let cc = {
    name : "harsh",
};

let dd =cc;
dd.name = "Naman";

console.log(cc);  // { name: 'Naman' }
console.log(dd);  // { name: 'Naman' }  

