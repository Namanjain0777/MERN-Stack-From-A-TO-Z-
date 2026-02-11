var a  = undefined;
// Hoisting impact per type
// ek variable ko jab js main banaate hai to wo variable do hisso main toot jaata hai and uska declare part upar chala jaata hai and uska initialization part neeche reh jata hai 

// var -> hoist ->undefined
// let   ->hoist -> X (create TDZ) Give referece error
// const ->hoist ->X

console.log(a)

// var a  = undefined; - it does to top of the file
a = 12;

let b = undefined; // it does not hoist
console.log(b);
b = 15;