// Parameters and Arguments
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

function add (v1 , v2){    //default value is set to undedined 
    console.log(v1+v2);   
}

add();  //NaN

function add1(v1 = 0 , v2 = 0){  //here we set a default value
    console.log(v1+v2);
}

add1();   //0
add1(1,2);//3
