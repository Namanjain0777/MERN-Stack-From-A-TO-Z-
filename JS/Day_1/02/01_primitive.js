// Data Types

// Data ka types

// primitives —> aisi saari values jinko copy karne par tumhe ek real copy mil jaaye
// string, number, boolean, null, undefined, symbol, bigint

let a = 12;
let b = a;
a = a + 2;
console.log(a);

// reference —> inko copy karne par real copy nahi milegi but aapko reference milega parent ka
// arrays, objects, functions
//  {} , () , []

let c = [1,2,3,4];
let d = c;
d.push(5);
console.log(c)


