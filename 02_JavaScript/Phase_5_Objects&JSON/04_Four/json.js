// JSON is a DATA FORMAT (not a JS object)
// Used to send & receive data between frontend & backend
// Text-based, lightweight, language-independent


// JS Object vs JSON
// JS Object
let user = {
    name: "Naman",
    age: 22,
    isMale: true
};
// JSON
/*
{
  "name": "Naman",
  "age": 22,
  "isMale": true
}
*/

// JSON.stringify()
// Convert JS object to JSON string
let jsonData = JSON.stringify(user);

console.log(jsonData);
// '{"name":"Naman","age":22,"isMale":true}'

console.log(typeof jsonData); // string

// JSON.parse()
// Convert JSON string to JS object
let parsedData = JSON.parse(jsonData);

console.log(parsedData);
// { name: 'Naman', age: 22, isMale: true }

console.log(typeof parsedData); // object

// Real Flow
// Send data
let sendData = JSON.stringify(user);

// Receive data
let receiveData = JSON.parse(sendData);

// Backend sends JSON
res.send(JSON.stringify(user));

// Frontend receives
let data = JSON.parse(response);



// Valid JSON
//Keys must be in double quotes
//Values must be valid JSON values
//No trailing commas
//No functions or undefined

/*
{
  "name": "Naman",
  "age": 22,
  "isMale": true,
  "skills": ["JS", "React"]
}
*/
