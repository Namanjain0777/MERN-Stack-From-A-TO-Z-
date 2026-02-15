// Object Methods
let user = {
    name: "Naman",
    age: 22,

    // Method inside object
    greet: function () {
        console.log("Hello, my name is " + this.name);
    },

    // Another method
    getAge: function () {
        return this.age;
    }
};

// Calling object methods
user.greet();           // Hello, my name is Naman
console.log(user.getAge()); // 22

// Shorthand Method Syntax
let student = {
    name: "Rishabh",
    marks: 85,

    // Shorthand method (no function keyword)
    showMarks() {
        console.log(this.name + " scored " + this.marks);
    }
};

student.showMarks(); // Rishabh scored 85

// this Keyword
// this refers to the object that is calling the method/

// this.name → refers to the name property of the object
// this.age → refers to the age property of the object

let person = {
    name: "Amit",
    city: "Delhi",

    info() {
        console.log(this.name + " lives in " + this.city);
    }
};

person.info(); // Amit lives in Delhi



let user2 = {
    name: "Naman",

    greet: () => {
        console.log(this.name);
    }
};

user2.greet(); // undefined ❌
// Arrow functions do NOT have their own this


// this → jis object ne method call kiya
// arrow fn → apna this nahi hota
