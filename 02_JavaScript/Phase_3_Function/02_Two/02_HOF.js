// A Higher-Order Function is a function that:
// ✔ takes a function as argument
// ✔ OR returns a function

function abcd2(val2) {
    // val2 is a function
    val2(); // execute the passed function
}

abcd2(function () {
    console.log("HOF");
});

// abcd2 is HOF
// anonymous function is callback

function outerFunction() {

    // Inner function (not executed yet)
    function innerFunction() {
        console.log("Hello from inner function");
    }

    // Returning the inner function
    return innerFunction;
}

let result = outerFunction(); // result holds innerFunction
result(); // now innerFunction executes

// Function stored in variable
const greet = function () {
    console.log("Good Morning");
};

greet(); // function behaves like a value

// Arrow function as argument
function calculate(a, b, operation) {
    return operation(a, b);
}

let sum = calculate(5, 3, (x, y) => x + y);
let mul = calculate(5, 3, (x, y) => x * y);

console.log(sum); // 8
console.log(mul); // 15

// calculate = HOF
// arrow function is callback

// Function returning function (closure intro)
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}

let double = multiplier(2);
let triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// setTimeout
setTimeout(function () {
    console.log("Runs after 2 seconds");
}, 2000);



// First-Class Function
// JS treats function like a value

// Callback Function
// A function passed to another function

// Higher-Order Function
// A function that takes OR returns a function

