
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


































