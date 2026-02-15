// Execution Context kya hota hai?
// Jab bhi JavaScript code run hota hai, JS engine ek environment banata hai jisme code execute hota hai.Us environment ko bolte hain: Execution Context

// Types of Execution Context
// Global Execution Context (GEC)
// Function Execution Context (FEC)


// Global Execution Context (GEC)
// Jab page load hota hai:
console.log("Hello");

// Sabse pehle JS: Global Execution Context (GEC) create karta hai.
// isme : 
// Global variables store hote hain
// Functions memory me jaate hain
// this global object ko point karta hai (browser me window)

// Execution Context 2 Phases me chalta hai
// 1st 
// Memory Creation Phase (Hoisting Phase)
// Is phase me:
// Variables ko memory milti hai (initial value = undefined)
// Functions ko pura memory milta hai

var a = 10;

function greet() {
    console.log("Hi");
}

// Ṃemory phase me 
// a = undefined
// greet = full function body

// 2nd
// Execution Phase
// Ab code line by line run hoga.



// Example
var a = 5;
var b = 10;

function sum(x, y) {
    return x + y;
}

var result = sum(a, b);
console.log(result);

// Step 1: Global Execution Context Create
// Memory Phase
// a = undefined
// b = undefined
// sum = full function body
// result = undefined

// Execution Phase
// a = 5
// b = 10
// result = sum(5,10)





// Function Execution Context (FEC)
// Jab:
sum(a,b);
// Call hota hai toh js mein New Execution Context create karta hai
// Isme:
// Memory Phase:
// x = undefined
// y = undefined

// Execution Phase:
// x = 5
// y = 10
// return 15



