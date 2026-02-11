// Error Handling Kyu Zaroori Hai?
// Agar error aa gaya aur handle nahi kiya:

// Code ruk jaata hai ❌
// App crash ho sakti hai ❌

// Isliye use karte hain:
// 🔥 try...catch

// try...catch Syntax
try {
    // risky code
} catch (error) {
    // error handle karo
}

// Simple Example
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Error aaya");
}
// Note:
// 10 / 0 JS me error nahi deta (Infinity deta hai),

try {
    console.log(a); // a defined nahi hai
} catch (error) {
    console.log("Error caught!");
    console.log(error.message);
}


// Error Object
// Catch block me jo error milta hai usme:
    // error.name
    // error.message
    // error.stack

try {
    undefinedFunction();
} catch (err) {
    console.log(err.name);    // ReferenceError
    console.log(err.message); // undefinedFunction is not defined
}

// finally Block
try {
    console.log("Try block");
} catch (err) {
    console.log("Catch block");
} finally {
    console.log("Finally block always runs");
}
// finally hamesha run hota hai.


// Custom Errors
// Kabhi kabhi khud error throw karna padta hai.
// throw Keyword

function checkAge(age) {

    if (age < 18) {
        throw new Error("Underage not allowed");
    }

    console.log("Access granted");
}

try {
    checkAge(16);
} catch (err) {
    console.log(err.message);   //Underage not allowed
}


// Custom Error Types
// JS me built-in error types hote hain:
    // Error
    // TypeError
    // ReferenceError
    // SyntaxError
    // RangeError

throw new TypeError("Wrong data type");
throw new ReferenceError("Variable not defined");
throw new SyntaxError("Invalid syntax");
throw new RangeError("Value out of range");


// Async Error Handling
// Promises ke saath:
fetch("wrong-url")
    .then(res => res.json())
    .catch(err => console.log("Error:", err));

// async/await ke saath:
async function getData() {
    try {
        let res = await fetch("wrong-url");
        let data = await res.json();
    } catch (err) {
        console.log("Error:", err);
    }
}

