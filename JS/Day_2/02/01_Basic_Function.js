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

// Default value;

function add (v1 , v2){    //Be default value is set to undedined 
    console.log(v1+v2);   
}

add();  //NaN

function add1(v1 = 0 , v2 = 0){  //here we set a default value
    console.log(v1+v2);
}

add1();   //0
add1(1,2);//3


// Rest Operator
// jav arguments kai saare ho to humain utne hi parameter banaane padege , issey bachne ke liya , hum rest a use karta hai agar ... function ke paramter space mein lage to wo rest operator hai 
function abcd(...val){
    console.log(val);
}

abcd(1,2,3,4,5,6,7,8,"Hello");


// return variable
// jaha se aaye ho wahi daal denge

function abcd2(){
    return 12;
}

let op = abcd2();
console.log(abcd2())

