// 1. Reverse an array

let arr = [1,2,3,4,5];
// Method 1: 
console.log(arr.reverse());

// Method 2:
let revArr=[];
for(let i =0 ; i<arr.length ; i++){
    revArr.push(arr[i]);
}
console.log(revArr);

// 2. Find maximum element
let max = arr[0];
for(let i =0 ; i<arr.length ; i++){
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log("Max is " + max);

// 3. Find minimum element
let min = arr[0];
for(let i =0 ; i<arr.length ; i++){
    if(min>arr[i]){
        min = arr[i];
    }
}
console.log("Min is " + min);

// Sum
let sum = arr.reduce((acc , curr)=>{
    return acc + curr;
})
console.log("Sum is " + sum);

// Average
let avg = sum/arr.length;
console.log("Average is " + avg);

// Count even numbers
let countEven = arr.filter((num)=>{
    return num%2===0;
}).length;
console.log("Count of even numbers is " + countEven);

// Count odd numbers
let countOdd = arr.filter((num)=>{
    return num%2!==0;
}).length;
console.log("Count of odd numbers is " + countOdd);

// Check if element exists
let exists = arr.includes(3);
console.log("Element exists is " + exists);

// Find index of element
let index = arr.indexOf(3);
console.log("Index of element is " + index);

// Remove duplicates
let unique = [...new Set(arr)];
console.log("Unique array is " + unique);

// Sort ascending
let sortAsc = arr.sort((a,b)=>{
    return a-b;
})
console.log("Sorted array is " + sortAsc);

// Sort descending
let sortDesc = arr.sort((a,b)=>{
    return b-a;
})
console.log("Sorted array is " + sortDesc);

// Merge two arrays
let arr2 = [6,7,8,9,10];
let merged = [...arr,...arr2];
console.log("Merged array is " + merged);

// Find second largest element
let secondLargest = arr.sort((a,b)=>{
    return b-a;
})[1];
console.log("Second largest element is " + secondLargest);

// Check if array is palindrome
let isPalindrome = arr.join(" ")===arr.reverse().join(" ");
console.log("Is array palindrome is " + isPalindrome);


