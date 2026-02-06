// Operators are special symbols or keywords in JavaScript used to perform operations on values

// Try to:
    // Use === instead of == to avoid type bugs.
    // Use ternary for quick decisions, not complex ones.
    // Think in truthy/falsy when using && , || , ! .

// !!value is a quick trick to convert anything into a boolean


console.log("10" + 1);     //101
console.log("10" - 1);     //9
console.log(true + false); //1
console.log(!!"Sheryians");//truthy

let str = "42";
let num = +str;
console.log(num); // 42

let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";  //minor

// Build a calculator:
console.log("Calculator")
function calc(a, b, operator) {
    // +, -, *, /
    switch(operator){
        case "+" : return a + b; break;
        case "-" : return a - b; break;
        case "*" : return a * b; break;
        case "/" : return a / b; break;
        default : "invalid operator";
    }
}
console.log(calc(2,4,"*"));

// Score logic:
let marks = 82;
let grade = marks>85? "Excellent" : marks>75 ? "good" : "fail";
console.log(grade);