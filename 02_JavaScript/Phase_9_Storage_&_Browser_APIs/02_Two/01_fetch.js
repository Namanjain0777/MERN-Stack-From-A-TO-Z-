// What are Browser APIs?
// Browser APIs =
// Browser ke built-in tools jo JS ko extra features dete hain.
// Examples:
    // DOM API
    // Fetch API
    // Geolocation API
    // Storage API

// fetch() API
// Server se data lene ke liye use hota hai
// 👉 Promise return karta hai

// Basic GET Request
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


// async/await Version
async function getUsers() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

getUsers();

// POST Request Example
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Hello",
        body: "World"
    })
})
.then(res => res.json())
.then(data => console.log(data));

// fetch Important Points
    // Promise return karta hai
    // .json() bhi Promise return karta hai
    // Default method = GET