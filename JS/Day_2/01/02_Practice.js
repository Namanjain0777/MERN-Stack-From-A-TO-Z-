// Print Number Form 1 to 10 using For Loop
console.log("============ Question 1 ================")
for(let i = 1 ; i<=10;i++){
    console.log(i);
}
// Print Number from 10 to 1 using while loop
console.log("============ Question 2 ================")
let i = 10;
while(i>=1){
    console.log(i);
    i--;
}
// Print even number from 1 to 20 using a for loop
console.log("============ Question 3 ================")
for(let i = 1 ; i<=20; i++){
    if(i%2==0){
        console.log(i);
    }
}
// Print odd numbers from 1 to 15 using a while loop.
console.log("============ Question 4 ================")
let q4 = 1;
while(q4<=15){
    if(q4%2!=0){
        console.log(q4);
    }
    q4++;
}
// Print the multiplication table of 5
console.log("============ Question 5 ================")
let n = 5;
for(let i = 1; i <= 10 ; i++){
    console.log(n + " X "+i+" = "+ i*n);
}
// Find the sum of numbers from 1 to 100 using a loop.
console.log("============ Question 6 ================");
console.log("using For Loop: ")
let sum = 0;
for(let i = 1 ; i<=100 ; i++){
    sum +=i;
}
console.log(sum);

console.log("using While Loop")
let a = 1;
let sumWhile = 0;
while(a<=100){
    sumWhile +=a;
    a++;
}
console.log(sumWhile);

// Print all numbers between 1 to 50 that are divisible by 3.
console.log("============ Question 7 ================")
console.log("using For Loop: ")
for(let i = 1 ; i<=50 ; i++){
    if(i%3==0){
        console.log(i);
    }
}
console.log("using While Loop")
let b = 1;
while(b<=50){
    if(b%3==0){
        console.log(b);
    }
    b++;
}

// Ask the user for a number and print whethere each number from 1 to that numberÄs even or odd.

console.log("============ Question 8 ================")
console.log("using For Loop: ");
let c = 100;
for(let i = 1 ; i<=c ; i++){
    if(i%2==0){
        console.log(i + " Is Even");
    }else{
        console.log(i + " Is Odd");
    }
}

console.log("using While Loop: ");
let d = 10;
let k = 1;
while(k<=d){
    if(k%2==0){
        console.log(k + " Is Even");
    }else{
        console.log(k + " Is Odd");
    }
    k++;

}
// Count how many numbers between 1 to 100 are divisible by both 3 and 5.
console.log("============ Question 9 ================")
console.log("using For Loop: ");
for(let i = 1 ; i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log(i);
    }
}

console.log("using While Loop: ");
let g = 100;
let l = 1;
while(l<=g){
    if(l%3==0 && l%5==0){
        console.log(l);
    }
    l++;
}

// Write a loop from 1 to 100 that:
    // Prints each number
    // Stops completely when it finds the first number
// divisible by 7
console.log("============ Question 10 ================")
for(let i = 1 ; i<=100 ; i++){
    console.log(i);
    if(i%7==0){
        break;
    }
}


// Skip Multiples of 3
console.log("============ Question 11 ================")

for(let i = 1 ; i<=20 ; i++){
    if(i%3==0){
        continue;
    }
    console.log(i);

}

// Write a loop from 1 to 100 that:
    // Prints only 5 odd numbers
    // Then stops the loop
console.log("============ Question 12 ================")
let count = 1;
for(let  i = 1 ; i<=100 ; i++){
    if(i%2!=0 && count<=5){
        console.log(i);
        count++;
    }
}

// Reverse a string using loop
console.log("============ Question 13 ================")
let str = "abcde";
let revStr = "";
for(let i = 1 ; i<=str.length ; i++){
    revStr = revStr + str.charAt(str.length - i);
}
console.log(revStr);

// Sum of all numbers in an array
console.log("============ Question 14 ================")
let arr = [1,2,3,4,5,6];
let sumArray = 0;
for(let i = 0 ; i< arr.length ; i++){
    sumArray += arr[i];
}
console.log(sumArray)


// Print all characters of a name using for-of
console.log("============ Question 15 ================")
let str2 = "Rishab";
for (const i of str2) {
    console.log(i);
}

// Print all object keys and values using for-in
console.log("============ Question 16 ================")
let obj = { 1 : "A" , 2 : "B" , 3 : "C" , 4 : "D" , 5 : "E" , 6 : "F"};
for (let key in obj) {
    console.log(key, obj[key]);
}

console.log("============ Question 17 ================");

// let guessNumber = Math.floor(Math.random()*10);
// console.log(guessNumber);
// let userGuess;

// while (userGuess !== guessNumber) {
//     userGuess = Number(prompt("Guess the number:"));

//     if (userGuess === guessNumber) {
//         console.log("🎉 Correct Guess!");
//     } else {
//         console.log("❌ Wrong guess, try again");
//     }
// }
// Pattern: Print triangle using 🔴
console.log("============ Question 18 ================");

let size = 5;

for (let i = 1; i <= size; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Sum of even numbers in an array using forEach  🔴
console.log("============ Question 19 ================")
let evenArr = [1,2,3,4,5,6,7,8];
let sumEven = 0;
evenArr.forEach((num) => {
    if (num % 2 === 0) {
        sumEven += num;
    }
});

console.log(sumEven);