let obj = {
    name : "Naman",
    age : 21,
    location : "Delhi"
}

for(let key in obj){
    console.log(key + " " + obj[key]);
}
// Why we dont use obj.key?
// Because key is a VARIABLE, not the literal property name.
// obj.key   // looks for property named "key"
// But your object does NOT have a property called "key".

console.log(Object.keys(obj) );

console.log(Object.entries(obj) );