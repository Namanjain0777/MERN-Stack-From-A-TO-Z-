// Create an array of student names and print each

let name = ["Naman" , "Rishab" , "Tanmay" , "Harshit" , "Rohan"];
name.forEach(function(nam){
    console.log(nam);
})

// Filter even numbers from an array
let num = [1,2,3,4,5,6,7,8,9,10];
let evenArray = num.filter(function(val){
    return val%2==0;
})
console.log(evenArray)

// Map prices to include GST (18%)
let prices = [100, 200, 300, 400];
let priceWithGST = prices.map(function(val){
    return val + val*0.18;
})
console.log(priceWithGST)

// Reduce salaries to calculate total payroll
let salaries = [1000, 1250 ,1500,950 , 2000];
let payroll = salaries.reduce(function(sum , val){
    return sum + val;
},0);
console.log(payroll)

// Find the first student with grade A
let obj = [
    ["1", "B"],
    ["2", "A"],
    ["3", "D"],
    ["4", "A"]
  ]

let gradeA = obj.find(function(val){
    return val[1]=='A';
})
console.log(gradeA)

// Write a function to reverse an array
let number = [1,2,3,4,5,6,7,8];
number.reverse();
console.log(number)

// Sort array of ages in ascending order
let ages = [23,64,23,67,42,47,13,86];
ages.sort();
console.log(ages)


// Destructure first two elements of an array
let againArr = [1,2,3,4,5,7,6]
let [a,b,,,c,,d] = againArr;
console.log(a,b,c,d)

// Use some() to check if any student failed
let report = [
    ["aman", "fail"],
    ["naman", "pass"],
    ["ujjwal", "fail"]
];

let check = report.some(function(val){
    return val[1]=="fail";
})
console.log(check)


// Use spread to copy and add new item
let oldArray = [1,2,3,4]
let newArray = [...oldArray];
newArray.push(1000);
console.log(newArray)



// [10, 2, 3].sort(); // [10, 2, 3] → ["10", "2", "3"] → wrong order
// use
// arr.sort((a, b) => a - b); // Correct numeric sort
