// Print numbers 1 to 50 using loop
for(let i = 1 ; i<=50 ; i++){
    console.log(i)
}
let i = 1
while(i<51){
    console.log(i);
    i++
}

// Find sum of numbers in array
let arr = [10, 20, 30, 40];
let sum = 0;
arr.forEach(function(val){
    sum += val;
})
console.log("Sum is : " + sum);

// Reverse a string
let str = "javascriptis sexy" ;
let rev = "";
for(let i = str.length-1 ; i>=0 ; i--){
    rev += str.charAt(i);
}
console.log(rev)

// Factorial of a number
let n = 5;
let fac = 1;
for(let i = n ; i>=1;i--){
    fac *= i;
}
console.log(fac)

// Palindrome check
let word = "madama";
let ispalindrom = (word)=>{
    let left = 0 ; 
    let right = word.length-1;
    for(let i = 0 ; i<Math.ceil(word.length/2) ; i++){
        if(word.charAt(left)!=word.charAt(right)){
            console.log("Not a palindrome");
            return;
        }
        left++;
        right--;
    }
    console.log("Is a palindrome");
    return;
}
ispalindrom(word);

// String Utility Tool
let reverseString = (word)=>{
    let rev = ""
    for(let i = word.length-1 ; i>=0 ; i--){
        rev += word.charAt(i);
    }
    console.log(rev)
}
let countVowels = (str)=>{
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str.charAt(i))){
            count++;
        }
    }

    console.log(count);
}


let strringTool = (word)=>{
    reverseString(word);
    countVowels(word);
}
let val = "HELLO I AM BRO at"
strringTool(val)
