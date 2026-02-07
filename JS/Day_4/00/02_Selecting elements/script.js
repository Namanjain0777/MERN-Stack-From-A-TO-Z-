// DOM = Body
// Dom Manipulation
// html se element select karna
// Ṭext badalna
// html bafalna
// css badalna
// attrivute badalna
// evenet listeners
let abcd = document.getElementById("abcd")
console.log(abcd);        //bro somethimes it giev as h1#abcd which is good but in somecase wehn you reload that page it can give <h1>...</h1> like this but in that case you need to just chnage the .log to .dir

console.dir(abcd);  //it giev in toggle always

let classAbcd = document.getElementsByClassName("abcd")
console.log(classAbcd);  //array jais dikhta hai but array nani hai 

let query = document.querySelector("h1");   //always sleect first one
console.log(query);

let query1 = document.querySelectorAll("h1");
console.log(query1);   //array jais dikhta hai but array nani hai 

