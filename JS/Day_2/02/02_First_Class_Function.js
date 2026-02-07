// First Class Function
// JavaScript treats functions as values:
// Assign to variables
// Pass as arguments
// Return from other functions

function abcd(val){
    val();
}
abcd(function(){
    console.log("hey");
})

function shout(msg) {
    return msg.toUpperCase();
}
function processMessage(fn) {
    console.log(fn("hello"));
}
processMessage(shout);

// Higher-Order Functions (HOF)

// Definition:
// A Higher-Order Function is a function that:
// 1️⃣ accepts another function as an argument
// OR
// 2️⃣ returns a function

// ------------------------------------
// Example 1: Function ACCEPTS another function

function abcd2(val2) {
    // val2 is a function
    val2(); // calling the passed function
}

abcd2(function () {
    console.log("HOF");
});
// What’s happening here?
    // abcd2 receives a function as a parameter
    // val2() executes that function
    // So abcd2 is a Higher-Order Function

// ------------------------------------
// Example 2: Function RETURNS another function

// A function that RETURNS another function
function outerFunction() {

    // This inner function is NOT executed yet
    function innerFunction() {
        console.log("Hello from inner function");
    }

    // outerFunction RETURNS the inner function
    return innerFunction;
}
let result = outerFunction();   //result = function innerFunction() { ... }
result();  //Now the inner function executes