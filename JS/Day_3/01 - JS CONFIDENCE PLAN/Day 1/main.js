// Check number even/odd
let a  = 102;
if(a%2==0){
    console.log("Even Numvber")
}else{
    console.log("Odd Number")
}

// Find larger of 2 numbers
let firstNumber = 3;
let secondNumber = 7;
if(firstNumber === secondNumber){
    console.log("Both numbers are equal");
}
if(firstNumber>secondNumber){
    console.log("Largest Number is "+firstNumber);
}else{
    console.log("Largest Number is "+secondNumber);
}

// Positive / Negative / Zero
let number = 100;
if(number==0){
    console.log("Its Zero");
}else if(number>0){
    console.log("Positive");
}else{
    console.log("Negative");
}

// Grade system (marks → grade)
let marks = 75;
if(marks<33){
    console.log("Fail");
}else if(marks<45){
    console.log("D");
}else if(marks<55){
    console.log("C");
}else if(marks<75){
    console.log("B");
}else{
    console.log("A");
}

// Simple calculator (switch)
let b = 10;
let c = 20;
let symbol = "/";
switch(symbol){
    case "+":
        console.log(b+c);
        break;
    case "-":
        console.log(b-c);
        break;
    case "/":
        console.log(b/c);
        break;
    case "*":
        console.log(b*c);
        break;
    default:
        console.log("Invalid Symbol")
}

// Mini Task
// Number Analyzer
// Input number
// Show: even/odd + positive/negative

let getNumber = -100;
let oddEven ;
let posNeg;
if(getNumber%2==0){
    oddEven ="Even";
}else{
    oddEven ="Odd";
}
if(getNumber>=0){
    posNeg = "positive";
}else{
    posNeg = "Negative"
}
console.log(`${oddEven} ${posNeg}`);
