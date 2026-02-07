// Write a BMI calculator function

function BMI(val1 = 0 , val2 = 0){
    return val1 /(val2 * val2);
}

console.log(Math.round(BMI(75,1.75)));


// Create a greet function with default name
let greet = (val = "Guest")=>{
    return "hi "+ val; 
}
console.log(greet("Naman")); // HI Naman
console.log(greet());

// Sum all numbers using rest parameter
function SUM(...val){
    let sum = 0;
    val.forEach((num)=>{
        sum +=num;
    })
    return sum;
}

console.log(SUM(1,2,3,4))

// Use a function to log even numbers in an array
let arr = [1,2,3,4,5]
arr.forEach((num)=>{
    if(num%2==0){
        console.log(num)
    }
})

// Use IIFE to isolate variables
// (function(){
//     let val = 1;
//     console.log(val);
// })()

// Create a pure function to add tax
// No external variables , No console.log inside function , dont depends on external state

function addTax(price, tax) {
    return price + tax;
}

let result = addTax(100, 12);
console.log(result); // 112

// Create a reusable discount calculator (HOF)
// Higher-Order Function
// It accepts a discount logic function
function discountCalculator(discountFn) {
    
    // returns a new function
    return function (price) {
        return discountFn(price);
    };
}
// 10% discount logic
function tenPercentDiscount(price) {
    return price - price * 0.10;
}

// Flat ₹200 discount logic
function flatDiscount(price) {
    return price - 200;
}

const tenPercentOff = discountCalculator(tenPercentDiscount);
const flat200Off = discountCalculator(flatDiscount);

console.log(tenPercentOff(1000)); // 900
console.log(flat200Off(1000));    // 800


// Write a function that returns another function
function outerFunction() {
    
    // outerFunction variable
    let message = "Hello from outer function";

    // returning an inner function
    return function innerFunction() {
        console.log(message);
    };
}
// outerFunction returns a function
let returnedFn = outerFunction();

// calling the returned function
returnedFn(); 

// Create a closure counter function

function createCounter() {
    let count = 0; // private variable (closure)

    return function () {
        count++;           // modifies outer variable
        return count;      // returns updated value
    };
}
const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



