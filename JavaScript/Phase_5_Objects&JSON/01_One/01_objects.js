// Objects in JavaScript are like real-world records – a collection of key-value pairs.
// They help us store structured data (like a student, a product, or a user profile).
// Key-Value Structure
// key can be of any type
// Singleton



// Create & access
let obj = {
    name : "Naman",
    age : 20,
    isMale : true
}
console.log(obj);  //{ name: 'Naman', age: 20, isMale: true }
console.log(obj.name); //Naman

// Dot vs bracket notation
// Dot → jab key ka naam pehle se pata ho
// Bracket → jab key variable ho ya weird ho

// use dot notation when you know the key
    // Property name is fixed
    // Property name is a valid identifier
    // No spaces, no special characters
    // Not dynamic

    
    obj["name"] = "Rishabh";
    console.log(obj);
    
    obj["city"] = "Delhi";
    console.log(obj);
    
// Bracket → jab key variable ho ya weird ho
    // Property name in a variable (dynamic key)
    // Property name with spaces / special characters
    // Numeric or non-standard keys
    // Looping over object keys

obj.collage = "Jaipur Engineering College";
console.log(obj);

obj.age = 43;
console.log(obj)


// Case	Use
    // Fixed key              ->	Dot
    // Dynamic key (variable) ->	Bracket
    // Space / special char   ->	Bracket
    // Looping keys           ->   	Bracket
    // Array index            ->	Bracket
    // Methods / length	      ->    Dot

// Delete property using DOT
delete obj.isMale;
console.log(obj);

// Delete property using BRACKET
delete obj["city"];
console.log(obj);




let jsUser = {
    name: "Naman",
    email: "naman@gmail.com",
    isLoggedIn: false
}

jsUser.email = "ballaballa@gmail.com";
console.log(jsUser);
jsUser.greeting = function() {
    console.log("Hello");
}
console.log(jsUser);
// console.log(jsUser.greeting);   //[Function (anonymous)]
console.log(jsUser.greeting());  //Hello and undefined
// why undefined? because function doesn't return anything
// but it prints Hello because console.log is inside the function

jsUser.greetingTwo = function() {
    console.log(`Hello ${this.name}`);
}
console.log(jsUser.greetingTwo());

// Object.freeze(student)
// student.name = "Balla balla";
// console.log(student)