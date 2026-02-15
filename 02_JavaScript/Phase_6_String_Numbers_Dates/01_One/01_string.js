let str = "JavaScript is Awesome";

// length → total number of characters
console.log(str.length); // 21

// slice → extracts part of string
// end index NOT included
// supports negative index

console.log(str.slice(0, 10));   // JavaScript
console.log(str.slice(4));       // Script is Awesome
console.log(str.slice(-8));      // Awesome

// substring → similar to slice
// ❌ does NOT support negative index  ->treated as 0

console.log(str.substring(0, 10)); // JavaScript
console.log(str.substring(4));     // Script is Awesome

// replace → replaces FIRST match
console.log(str.replace("Awesome", "Powerful"));
// JavaScript is Powerful

// replaceAll → replaces ALL matches
console.log(str.replaceAll("a", "@"));
// Jv@script is Powerful

// split → string → array
console.log(str.split(" "));
// ["JavaScript", "is", "Awesome"]

console.log(str.split(""));
// ['J','a','v','a','S','c','r','i','p','t'...]

// includes → returns true/false
console.log(str.includes("JavaScript")); // true
console.log(str.includes("python"));     // false

let name = "Naman";
let age = 22;

// Old way
console.log("My name is " + name + " and age is " + age);

// Template literal (modern)
console.log(`My name is ${name} and age is ${age}`);


console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("a"));      // first index
console.log(str.lastIndexOf("a"));  // last index
let msg = "   hello world   ";

console.log(msg.trim());
console.log(msg.trimStart());
console.log(msg.trimEnd());
console.log(str.charAt(4));       // character
console.log(str.charCodeAt(4));   // ASCII code
console.log("JS ".repeat(3)); // JS JS JS
console.log(str.startsWith("Java"));
console.log(str.endsWith("Awesome"));
console.log("Hello".concat(" ", "World"));



// Strings are IMMUTABLE
// Methods return NEW string
// Original string never changes


