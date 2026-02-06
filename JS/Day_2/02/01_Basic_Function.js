// Functions are blocks of reusable logic.
// Instead of repeating the same task again and again, wrap it in a function and reuse it with different inputs.


function names(){
    // Code
    console.log("I am in name function");
}

names();  //We Call A Function

// Function name cant start with Number(1,2,3) , Symbol(@,!,$) , and Keyword(break , if , for , while , Array)

function abc(){     //Function decleration 
    console.log("Today is 6 Feb");
}

abc();

// Fucntion Expression
// Functions stored in variables
// Cannot be hoisted (you can’t call them before they’re defined)
let fnc = function(){ 
    console.log("Fucntion name is the variable name ");
}
fnc();


// Arrow function / fat arror function
let fnc2 = ()=>{
    console.log("I am in fnc2")
}
fnc2();



function greet(name) {    //name is parameter
    console.log("Hello " + name);
}
greet("Naman");   //naman is argument

// Return Values

function sum(a, b) {
    return a + b;    //return sends back a result to wherever the function was called
    // After return , function exits
}

let total = sum(5, 10); // total is 15

