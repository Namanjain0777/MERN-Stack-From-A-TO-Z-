// Current page URL control karta hai

console.log(location.href);
console.log(location.hostname);
console.log(location.pathname);

// Redirect to another page
location.href = "https://google.com";

// Reload page
location.reload();
/*
| API       | Use                 |
| --------- | ------------------- |
| fetch     | Server se data lena |
| navigator | Browser/device info |
| location  | URL control         |
*/ 