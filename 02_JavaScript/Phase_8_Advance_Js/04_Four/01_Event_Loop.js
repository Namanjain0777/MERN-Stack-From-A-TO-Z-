// JavaScript Single Threaded Hai
// Matlab: Ek time pe ek hi kaam
// Phir async kaise chalta hai? -> Event Loop

// Event Loop Kya Hai?
// Event Loop ek system hai jo decide karta hai:
// Kaunsa task kab run hoga

// JS Engine ke 4 Important Parts
        // Call Stack
        // Web APIs (Browser)
        // Microtask Queue
        // Macrotask Queue

// 1) Call Stack
// Yaha synchronous code run hota hai.
console.log("A");
console.log("B");


// 2)Web APIs
// Browser handle karta hai:
    // setTimeout
    // setInterval
    // fetch
    // DOM events

setTimeout(() => {
   console.log("Hello");
}, 2000);

// Timer browser handle karega.

// 3) Macrotask Queue
// Yaha async code run hota hai.
// Isme aate hain:
    // setTimeout
    // setInterval
    // DOM events

// 4) Microtask Queue
// Yaha async code run hota hai.
// Isme aate hain:
    // Promise .then()
    // .catch()
    // .finally()
    // MutationObserver
// Important:
// Microtasks ki priority macrotask se zyada hoti hai.


// Execution Order Rule
    // 1. Synchronous code
    // 2. Microtasks
    // 3. Macrotasks

console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Output: 
// Sync code
    // start 
    // end
// MicroTask
    // Promise  
// MacroTask
    // Timeout


// Event loop pehle microtask queue empty karta hai.


// Even:
// setTimeout(..., 0)
// Still goes to macrotask queue.

