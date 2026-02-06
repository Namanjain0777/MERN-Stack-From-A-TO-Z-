// Type Coercion(== vs ===)
// == compares value with type conversion
// === compares value + type (no conversion)

// Concept -> jismein aapka ek type automatically convert ho jyage

console.log("5" + 1); //concat 
// if any one on the operants is string then it convert in string
console.log("5" - 1); //concat 
// if any one on the operants is string then it convert in number

// Truthy vs falsy values
// falsy values: 
//  0 , false . "" , null , undefined , NaN ,document.all
// other than this all are truthy value (e.g : -1 , "0" , "false" , [] , {} , function(){}, . etc ) 
// Trick to know its falsy value
console.log(!!0);  

if(null){  //js automatically convery to truthty and falsy value

}
