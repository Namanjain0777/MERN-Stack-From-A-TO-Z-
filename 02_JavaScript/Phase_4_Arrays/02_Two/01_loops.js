let arr = [1,2,3,4,5];

// for loop
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

// for each loop   ->NO return
arr.forEach(function (val, index) {
    console.log(val, index);
});

// map -> RETURNS new array  | Original Safe
// sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par

//jab bhi aapko aise koi case dikh jaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagega

// map dikhta hi saath man mwin ek black array bana liya karo

let doubled = arr.map(function (val) {
    return val * 2;
});
console.log(doubled);

// filter -> RETURNS new array  | Original Safe
let even = arr.filter(function (val) {
    return val % 2 === 0;
});
console.log(even);

// reduce -> RETURNS single value  | Original Safe
let sum = arr.reduce(function (acc, val) {
    return acc + val;
});
console.log(sum);

// find -> RETURNS first match  | Original Safe
let firstEven = arr.find(function (val) {
    return val % 2 === 0;
});
console.log(firstEven);

// every -> RETURNS boolean  | Original Safe
let allEven = arr.every(function (val) {
    return val % 2 === 0;
});
console.log(allEven);

// some -> RETURNS boolean  | Original Safe
let someEven = arr.some(function (val) {
    return val % 2 === 0;
});
console.log(someEven);

// sort -> RETURNS new array  | Original Safe
let sorted = arr.sort(function (a, b) {
    return a - b;
});
console.log(sorted);

// fill -> Fills array with value
arr.fill(0);
console.log(arr);

// slice -> RETURNS new array  | Original Safe
let sliced = arr.slice(1, 3);
console.log(sliced);

// splice -> Modifies original array
arr.splice(1, 2);
console.log(arr);

// join -> Converts array to string
let joined = arr.join(",");
console.log(joined);

// concat -> Merges arrays
let arr2 = [6, 7];
let merged = arr.concat(arr2);
console.log(merged);

// includes -> Checks for element
let includes = arr.includes(3);
console.log(includes);

// flat -> Flattens nested arrays
let nested = [1, [2, 3], [4, [5]]];
let flattened = nested.flat(2); // depth 2
console.log(flattened);

// reverse -> Modifies original array
arr.reverse();
console.log(arr);

// at -> Access element by index
let at = arr.at(2);
console.log(at);

// isArray -> Checks if it's an array
let isArray = Array.isArray(arr);
console.log(isArray);

// from -> Creates array from iterable
let from = Array.from("hello");
console.log(from);

console.log(Array.from({ name: "Naman" }));
// [] → because object is not iterable

let score1 = 10, score2 = 20, score3 = 30;
console.log(Array.of(score1, score2, score3));