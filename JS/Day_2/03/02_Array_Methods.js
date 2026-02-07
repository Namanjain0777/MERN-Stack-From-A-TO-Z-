
// arr.push()  if you see() that mean its a method

let arr = [1, 2, 3, 4];
console.log("Original "+arr);
arr.push(5); // Add to end
console.log("Push "+ arr);
arr.pop(); // Remove last
console.log("Pop "+arr);
arr.shift(); // Remove first
console.log("shift "+arr);
arr.unshift(0); // Add to start
console.log("unshift "+arr);
arr.splice(1, 2); // Remove 2 items starting at index 1
console.log("slice "+arr);
arr.reverse(); // Reverse order
console.log("reverse "+arr);
arr.sort(); // Lexical sort by default  | Also sort string in aLphabatical order
console.log("Sort " + arr);
// Don't modify original array
let newArr = arr.slice(1, 3); // Copy from index 1 to 2
arr.sort(); // Lexical sort by default | // sorts as strings
console.log(newArr);

let arr1 = [11, 62, 3, 4, 25];

let desc = arr1.slice().sort(function (a, b) {
    return b - a;
});

console.log(desc); // [62, 25, 11, 4, 3]

let arr2 = [11, 62, 3, 4, 25];

let asc = arr2.slice().sort(function (a, b) {
    return a - b;
});

console.log(asc); // [3, 4, 11, 25, 62]

// Why slice() is used (IMPORTANT)
// sort() modifies the original array.
// creates a copy, so original array stays safe

// splice changes original array, slice does not
// forEach vs map : map returns a new array
// sort() converts values to strings unless compareFn is provided:
