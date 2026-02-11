
// Synchronous (Normal JS)
console.log("A");
console.log("B");
console.log("C");

// 👉 Line by line execute hota hai
// 👉 Next line tab chalegi jab previous complete ho


// Asynchronous
console.log("Start");

setTimeout(() => {
    console.log("Inside Timeout");
}, 2000);

console.log("End");
// Output : Start, End, Inside Timeout
// Why? -> Because setTimeout async hai.


// JavaScript Single Threaded Hai
// 👉 JavaScript ek thread (single thread) hota hai
// 👉 Agar ek line 10 seconds le rhi hai to next line wait karega

// Phir async kaise possible hai?
// Event Loop -> JS + Browser milke async handle karte hain.

// Execution Flow
    // Call Stack
    // Web APIs (browser handles timer, fetch etc.)
    // Callback Queue
    // Event Loop


// setTimeout()
// 👉 Timer browser handle karta hai
// 👉 Time complete hone ke baad callback queue me jaata hai
// 👉 Event loop check karta hai
// 👉 Call stack empty ho toh execute karta hai


setTimeout(function() {
    console.log("Hello after 2 sec");
}, 2000);
setTimeout(() => {
    console.log("Hello");
}, 0);
// Even 0 ms me bhi immediately run nahi karega.
// Stack empty hone ka wait karega.

// setInterval()
let id = setInterval(() => {
    console.log("Running every 1 sec");
}, 1000);

// Stop karne ke liye:
clearInterval(id);

























