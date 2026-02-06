// Student grade logic:

function checgGarde(val){
    if(val<25) return 'F';
    else if(val<35) return 'D';
    else if (val<45) return 'C';
    else if (val<55) return 'B';
    else if (val<100) return 'A';
    else return "Invalid Marks";
}

let val = 50;
console.log(checgGarde(val));


// Rock-paper-scissors

function rockPaper(val1 , val2){
    if(val1=="rock" && val2 =="paper"){
        console.log("computer Win");
    }else if(val1=="rock" && val2 =="scissors"){
        console.log("User Win");
    }else if(val1=="scissors" && val2 =="paper"){
        console.log("User Win");
    } else if(val1=="scissors" && val2 =="rock"){
        console.log("Computer Win");
    }else if(val1=="paper" && val2 =="rock"){
        console.log("USer Win");
    }else if(val1=="paper" && val2 =="scissors"){
        console.log("Computer Win");
    }else{
        console.log("Invalid Output");
    }
}
rockPaper("rock" , "paper");

// Login message:
let isLoggedIn = true;
let isAdmin = false;

if(isLoggedIn && isAdmin){
    console.log("admin protal ");
}else if(isLoggedIn){
    console.log("customer portal");
}

// Weather advice

let weather = "rainy";

switch(weather){
    case "sunny" : 
        console.log("Wear Sunny cloths");
        break;
    case "rainy" :
        console.log("Wear rainCourt");
        break;
    default:
        console.log("Any Cloths");
}

// Age checker
let age = 19;
age<18? console.log("Kid"): age<30? console.log("Teen") : age<50? console.log("adult"): console.log("senior"); 