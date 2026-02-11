// Functions are blocks of reusable logic.
// Instead of repeating the same task again and again,
// we put the logic inside a function and reuse it.

// -----------------------------
// Function Declaration (Basic)
// -----------------------------

// Function syntax
function functionName() {
    console.log("Hello");   // Code that runs when function is called
}

// Calling / invoking the function
functionName();


// Rules for function names:
// ❌ Cannot start with numbers (1,2,3)
// ❌ Cannot start with symbols (@,!,#,$)
// ❌ Cannot use reserved keywords (if, for, while, break, etc.)
// ✅ Function names are case-sensitive (abc ≠ ABC)


// -----------------------------
// Function Declaration
// -----------------------------

function abc() {          // Function declaration
    console.log("Hello");
}

// Can be called anywhere (hoisting applies)
abc();


// -----------------------------
// Function Expression
// -----------------------------

// Function stored inside a variable
// The function itself has no name (anonymous function)

// ❌ Not hoisted → must be defined before calling
const def = function () {
    console.log("Function name is the variable name def");
};

// Calling the function using variable name
def();


// -----------------------------
// Arrow Function (Fat Arrow Function)
// -----------------------------

// Shorter syntax for function expression
// Uses => instead of function keyword
const ghi = () => {
    console.log("Arrow function");
};

// Calling the arrow function
ghi();


/*
1️⃣ Function Declaration
function abc() {}

2️⃣ Function Expression
const def = function () {};

3️⃣ Arrow Function
const ghi = () => {};
*/