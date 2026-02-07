// Create an object for a book (title, author, price)
let book = {
    title : "Title of the book",
    author : "Naman",
    price : 125
}

console.log(book)

// Access properties using both dot and bracket
console.log(book.author);
console.log(book['author']);
    // price is treated as a variable
    // But you never declared a variable named price
    // JS tries to find price → ❌ ReferenceError
    // Bracket notation expects a string key, not a bare name.

// Write a nested object (user with address and location)
let user = {
    name : "naman",
    age: 21,
    address : "Delhi",
    location : {
        lan : 77.54,
        long : 45.94,
    }
}

// Destructure name and age from a student object

let {name , age} = {...user};
console.log(name , age);

// Loop through keys and values of an object
for(let key in user){
    console.log(key + " "+ user[key]);
}

// Convert object to array using Object.entries()
console.log(Object.entries(user));
Object.entries(user).forEach(function(val){
    console.log(val[0]+ " : "+ val[1]);
})

// Copy an object using spread operator
let user2 = {...user};
console.log(user2);
// The spread operator creates a shallow copy, so nested objects are still shared by reference
// Primitive values → copied ✅
// Nested objects / arrays → shared reference ❌

// Create a deep copy of an object with nested structure
console.log("Clone")
let clone1 = {
    name: "Naman",
    age: 21,
    address: {
        city: "Delhi",
        pincode: 110001,
        locations: {
            area: "CP",
            landmark: "Metro Station"
        }
    }
}

let clone2 = JSON.parse(JSON.stringify(clone1));
console.log(clone2);
// clone2.address.location.area = "INDIA"
console.log("Updated Clone1 ")
console.log(clone1);
console.log("Updated Clone2 ")
console.log(clone2);

// Use optional chaining to safely access deep values
console.log(clone1?.address?.location?.landmark);  //undefined

// Use a variable as a key using computed properties
let newKey = "SecondName";
let newObj = { 
    name : "Naman",
    [newKey] : "Jain"
}
console.log(newObj);

