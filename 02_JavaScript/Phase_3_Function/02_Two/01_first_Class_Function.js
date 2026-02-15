// ------------------------------
// First-Class Functions
// ------------------------------
// JavaScript treats functions like values:
// ✔ assign to variables
// ✔ pass as arguments
// ✔ return from other functions


function abcd(val) {
    // val is expected to be a function
    val(); // calling the function passed as argument
}

// Passing an anonymous function as argument
abcd(function () {
    console.log("hey");
});

// Function that transforms a message
function shout(msg) {
    return msg.toUpperCase();
}

// Function that accepts another function
function processMessage(fn) {
    // fn is a function
    console.log(fn("hello"));
}

// Passing shout function as argument
processMessage(shout);

// processMessage is a Higher-Order Function
// shout is a callback function

