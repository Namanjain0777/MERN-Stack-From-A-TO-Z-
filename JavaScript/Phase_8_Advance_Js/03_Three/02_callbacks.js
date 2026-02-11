// Callbacks
// 👉 Function jo kisi aur function me pass hota hai.

function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

greet("Naman", function() {
    console.log("Callback executed");
});

// Callback Hell 
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);

// Deep nesting = hard to manage.