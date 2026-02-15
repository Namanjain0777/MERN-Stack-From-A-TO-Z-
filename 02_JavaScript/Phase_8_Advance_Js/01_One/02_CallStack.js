// Call Stack
// 👉 Call stack ek stack hota hai jo execution contexts ko manage karta hai.

function one() {
    two();
}

function two() {
    three();
}

function three() {
    console.log("Hello");
}

one();

/*
Global()
   ↓
one()
   ↓
two()
   ↓
three()
*/

// LIFO (Last In First Out)
// so three first run then so one...
