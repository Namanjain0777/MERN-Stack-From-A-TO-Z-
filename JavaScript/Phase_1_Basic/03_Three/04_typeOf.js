
// typeOf Quirks (e.g type of null == 'object')

console.log(typeof(12));  //number
console.log(typeof(NaN)); //number
console.log(typeof(null));//object
// typeof null === "object" is a bug, but has existed since the early days of JS.