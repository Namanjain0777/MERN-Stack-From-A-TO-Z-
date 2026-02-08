// ================= OBJECT BASICS =================

// Create & access
let user = {
    name: "Naman",
    age: 22,
    city: "Jaipur"
};

console.log(user.name);       // dot notation
console.log(user["city"]);   // bracket notation

// Update & add
user.age = 23;
user.college = "Delhi me hai";
console.log(user);

// Check property exists
let result = "age" in user;
console.log(result); // true

// ================= LOOP OBJECT =================

let product = {
    title: "Phone",
    price: 30000,
    brand: "Samsung"
};

for (let key in product) {
    console.log(key + " " + product[key]);
}

// Count properties
let keysCount = 0;
for (let key in product) {
    keysCount++;
}
console.log("Total properties:", keysCount);

// ================= NESTED OBJECT =================

let student = {
    name: "Amit",
    marks: {
        math: 70,
        english: 60,
        science: 85
    }
};

console.log("Science marks:", student.marks.science);
student.marks.english = 75;
console.log(student);

// ================= ARRAY OF OBJECTS =================

let users = [
    { name: "Aman", age: 21 },
    { name: "Naman", age: 23 },
    { name: "Ravi", age: 19 }
];

// Find specific object
for (let i = 0; i < users.length; i++) {
    if (users[i].name === "Naman") {
        console.log("Found at index:", i);
        break;
    }
}

// Add new object
users.push({ name: "Sahil", age: 25 });
console.log(users);

// ================= MINI TASK – USER PROFILE ANALYZER =================

let profile = {
    name: "Naman",
    skills: ["JS", "HTML", "CSS"],
    experience: 1.5
};

// total skills
let totalSkills = profile.skills.length;

// has "JS" or not
let hasJS = profile.skills.includes("JS");

// experience level
let level = "";
if (profile.experience < 1) {
    level = "Beginner";
} else if (profile.experience <= 2) {
    level = "Intermediate";
} else {
    level = "Advanced";
}

console.log("Total Skills:", totalSkills);
console.log("Has JS:", hasJS);
console.log("Experience Level:", level);
