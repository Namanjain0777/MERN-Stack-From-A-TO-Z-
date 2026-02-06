// repeat karne ko loop kahte haii

// for while for each (80%)

// 1 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9 10

// kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai 
// for
// 1-50


// kaha se jaane hai -> kab rukna hai -> kaise jaana hai
// While

// 1 - jab main hello bolu




// For Loop
// 1 - 100
// for(start ; end ; change){

// }

for(let  i = 1 ; i<=100 ; i++){
    console.log(i);
}

// While Loop

// Start
// while(condition){

// }

let i =1;
while(i<32){
    console.log(i);
    i++
}


// do- While
// do{

// }
// while(end)

let j = 1;
do{
    console.log(j);
    j++
}while(j<1);


// break 
for(let i = 1 ; i<20000;i++){
    console.log(i);
    if(i==32){
        break;
    }
}

// Continue
for(let i = 1 ; i<10 ; i++){
    if(i==6){
        continue;
    }
    console.log(i);
}