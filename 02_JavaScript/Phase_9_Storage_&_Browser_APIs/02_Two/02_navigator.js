// Browser aur device ki information deta hai


console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);

// Check Internet Status
if (navigator.onLine) {
    console.log("Internet connected");
} else {
    console.log("No internet");
}

// Geolocation (permission required)
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});

