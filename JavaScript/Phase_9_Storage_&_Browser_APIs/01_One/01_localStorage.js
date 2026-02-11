// Web Storage
// Web Storage browser me data store karne ka tarika hai.
// Do types hote hain:
        // 1️⃣ localStorage
        // 2️⃣ sessionStorage
// Dono key-value pair me data store karte hain.

// 1️⃣ localStorage
// 👉 Data browser me permanently store hota hai
// 👉 Page refresh karne se delete nahi hota
// 👉 Browser close karne se bhi nahi delete hota

// 🔹 Basic Syntax
localStorage.setItem("name", "Naman");

// 🔹 Data Get Karna
let name = localStorage.getItem("name");
console.log(name);

// 🔹 Data Remove Karna
localStorage.removeItem("name");

// 🔹 Sab Clear Karna
localStorage.clear();

// ⚠️ Important
// localStorage sirf string store karta hai.

// Agar object store karna hai:
// let user = { name: "Naman", age: 22 };
// localStorage.setItem("user", JSON.stringify(user));


// Retrieve karte waqt:

let storedUser = JSON.parse(localStorage.getItem("user"));
console.log(storedUser.name);

