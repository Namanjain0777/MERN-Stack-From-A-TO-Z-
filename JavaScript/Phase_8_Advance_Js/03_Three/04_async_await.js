// Step 1: Promise Yaad Hai?
// Promise = future me milne wala result.
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data aa gaya");
        }, 2000);
    });
}
// Without async/await (Normal Promise way)
getData().then((data) => {
    console.log(data);
});
// Kaam karta hai
// But agar multiple ho gaye toh messy lagta hai.


// Step 2: async kya karta hai?
async function test() {
    return "Hello";
}
// Important:
console.log(test());
// Output: Promise { 'Hello' }

// async function hamesha Promise return karta hai
// Even agar simple value return kare.

// Step 3: await kya karta hai?
// await Promise ke complete hone ka wait karta hai.


async function fetchData() {

    let data = await getData();
    console.log(data);

}

fetchData();

// Flow kya ho raha hai?
// fetchData start hota hai
// await getData() pe rukta hai
// 2 second wait karta hai
// Data milta hai
// Next line run hoti hai

// await = ruk ja jab tak promise complete na ho
// await sirf async function ke andar use hota hai.

// let data = await getData();  // ❌ Error

async function run() {
   let data = await getData();
}


// You ordered food 🍔
// Without await:
// Order karo → restaurant ko bolo jab ready ho tab bata dena (.then)

// With await:
// Order karo → table pe baith ke wait karo jab tak food na aaye

// async makes a function return a Promise.
// await pauses execution until the Promise resolves.

