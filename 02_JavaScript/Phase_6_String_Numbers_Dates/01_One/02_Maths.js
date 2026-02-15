let num = 12.7;

// Math.random()
// Returns a random number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random()); // 0.1234...

let randomNum = Math.floor(Math.random() * 10) + 1;
// if we want to get random number between 20 to 30;
let max = 30;
let min = 20;
let randomNum2 = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum2);

// floor → neeche wali value
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.floor(-4.1)); // -5


// ceil → upar wali value
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5
console.log(Math.ceil(-4.9)); // -4


// round → nearest integer
// .5 ya usse zyada → upar
// .4 ya kam → neeche

console.log(Math.round(4.4)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.round(4.6)); // 5


console.log(Math.abs(-10));   // 10
console.log(Math.max(10, 25, 5)); // 25
console.log(Math.min(10, 25, 5)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16));  // 4
console.log(2 ** 3);         // 8 (modern)

// random → 0 to <1
// floor → down
// ceil → up
// round → nearest
