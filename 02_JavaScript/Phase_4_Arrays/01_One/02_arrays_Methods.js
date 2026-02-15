let arr = [1, 2, 3, 4];
console.log("Original " + arr);

// push → add at END  | modifies original array
arr.push(5);
console.log("Push " + arr);

// pop → remove LAST element
arr.pop();
console.log("Pop " + arr);

// shift → remove FIRST element
arr.shift();
console.log("Shift " + arr);

// unshift → add at START
arr.unshift(0);
console.log("Unshift " + arr);

// splice → changes original array
// (startIndex, deleteCount)
arr.splice(1, 2); // remove 2 elements from index 1
console.log("Splice " + arr);

// reverse → reverses original array
arr.reverse();
console.log("Reverse " + arr);

// sort → by default lexicographical (string-based)
arr.sort();
console.log("Sort " + arr);

[1, 10, 2].sort(); // ["1","10","2"] ❌

// slice() — DOES NOT modify original array
// slice(start, end) → end NOT included
let newArr = arr.slice(1, 3);
console.log(newArr);
// ✔ Creates new array
// ✔ Original array safe


// concat() → merges arrays
// ❌ does NOT change original arrays
// ✅ returns a NEW array

let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [6, 7];

let merged = arr1.concat(arr2, arr3);

console.log(merged); // [1,2,3,4,5,6,7]
console.log(arr1);   // [1,2,3] (unchanged)

// Using spread (modern way 🔥)
let merged2 = [...arr1, ...arr2, ...arr3];
console.log(merged2); // [1,2,3,4,5,6,7]

// join() → converts array into STRING
// separator ke basis pe join karta hai

let fruits = ["apple", "banana", "mango"];

console.log(fruits.join());        // "apple,banana,mango"
console.log(fruits.join(""));      // "applebananamango"
console.log(fruits.join(" "));     // "apple banana mango"
console.log(fruits.join(" | "));   // "apple | banana | mango"

// ✔ original array safe
// ✔ mostly used for display / formatting


// Numeric Sorting
let arr5 = [11, 62, 3, 4, 25];

// Descending order
let desc = arr5.slice().sort(function (a, b) {
    return b - a;
});
console.log(desc); // [62, 25, 11, 4, 3]

// Ascending order
let asc = arr5.slice().sort(function (a, b) {
    return a - b;
});
console.log(asc); // [3, 4, 11, 25, 62]
