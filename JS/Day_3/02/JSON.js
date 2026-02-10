// JSON = JavaScript Object Notation

const user = {
  name: "Naman",
  age: 22,
  city: "Jaipur"
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
// {"name":"Naman","age":22,"city":"Jaipur"}

// Convert JSON → JS Object
const jsonData2 = '{"name":"Naman","age":22,"city":"Jaipur"}';

const userObj = JSON.parse(jsonData2);

console.log(userObj.name); // Naman

//JSON with localStorage
// localStorage stores only strings

const user3 = {
  name: "Naman",
  age: 22
};

localStorage.setItem("userData", JSON.stringify(user3));

const data = JSON.parse(localStorage.getItem("userData"));
console.log(data.name); // Naman

// JSON with Fetch / API
fetch("https://api.example.com/product")
  .then(res => res.json())   // JSON → JS object
  .then(data => {
    console.log(data.title);
    console.log(data.price);
  });
