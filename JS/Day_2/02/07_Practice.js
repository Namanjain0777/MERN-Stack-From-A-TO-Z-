// Q1: What's the difference between function declaration and expression in terms of hoisting?
abcd();

function abcd(){
    console.log("Its Fucntion declaration and it support hoisting")
}

// asd(); //Error
let asd = function(){
    console.log("Its an Funstion ecpression and it doesn't support hoisting ")
}
asd();

// Q2
greet();  //Hello!
function greet() {
    console. log( "Hello!" ) ;
}

//Q3 Convert Fn to Arrot fucntion
function multiply(a, b){
    return a * b;
}

let multiply1 =(a,b)=>{return a*b;}
multiply1();

// Q4 identify Parameter and Argument 
function welcome (name) { // Parameter 
    console. log ( name) ;
}
welcome( "Naman") ; //Argument 


//Q5 How many parameter and Argument it have

function Demo(a,b,c){}   //3 parameter  C = Undefined
Demo(1,2);  //2 Argument 

//Q6 Guess Output
function sayHi(name = "Guest") {
    console. log ( "Hi" ,name) ;
}
sayHi();  //Hi Guest

//Q7 What does the ... operator mean in parameters?
function dot(...val){   //... is Rest Operator
    console.log(val);
}

dot(1,2,3,4,5);

// Q8 Use rest parameter to accept any number of scores and return the total.

function sum(...val){
    let sums = 0;
    val.forEach(function(val){
        sums+=val;
    })
    return sums;
}

console.log(sum(1,2,3,4,5));

// Q9 
function checkAge(age){
    if (age<18) return "Too Young";
    else return "Allowed"
}

console.log(checkAge(2));

//Q10 What does it mean when we say "functions are first—class citizens"?
//Q11 Can you assign a function to a variable and then call it? Show how.
//Q12  Pass a function into another function and execute it inside.

// In JavaScript, functions are treated like normal values.
// That means functions can be:

// 1️⃣ Stored in variables
// let greet = function () {
//     console.log("Hello");
// };
// greet(); // Hello

// 2️⃣ Passed as arguments to other functions
function runFunction(fn) {
    fn(); // calling the passed function
}

runFunction(function () {
    console.log("Function passed as argument");
});

// 3️⃣ Returned from another function
function outer() {
    return function () {
        console.log("Function returned from another function");
    };
}

outer()(); // calling returned function

// 4️⃣ Stored in data structures (arrays, objects)
let arr = [
    function () {
        console.log("I am inside array");
    }
];

arr[0]();

let obj = {
    sayHi: function () {
        console.log("Hi from object");
    }
};

obj.sayHi();

//Q13 What is a higher-order function?
// Functions that accept other functions or return functions.
function createMultiplier(x) {
    return function (y) {
        return x * y;
    };
}
let double = createMultiplier(2);
console.log(double(5)); // 10

// Q14 iS IT hof?
[1, 2, 3].map(function (x) {
    return x * 2;
});
// Yes

//Q15 What is a closure? When is it created?
function abc() {
    let a = 12; // parent function variable

    return function () {
        // inner function uses variable 'a'
        console.log(a);
    };
}

// const hi = abc();
// hi()
// hi()

// Q16 Convert this normal function into an IIFE

(function printss(){
    console.log("I am printing")
})()

// Q17 What is the use of I IFE? Name one real—world use case.
// When we need to craete a private Variable
// Avoid Global Scope Pollution

//Q18
