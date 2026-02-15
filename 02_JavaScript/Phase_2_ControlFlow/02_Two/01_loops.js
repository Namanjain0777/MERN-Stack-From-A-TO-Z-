// repeat karne ko loop kahte haii

// if we master for , while , for each we covered 80% of loops

// for
// kaha se jaana hai -> kaha tak jaana hai -> kaise jaana hai

// Syntax -> for(initialization ; condition ; increment/decrement){}

// Print 1- 50 with for loop
for(let i = 1 ; i <= 50 ; i++){
    console.log(i);
}

// While
// kaha se jaane hai -> kab rukna hai -> kaise jaana hai

// Syntax -> while(condition){}

// Print 1- 50 with while loop
let i = 1;
while(i<=50){
    console.log(i);
    i++;
    if(i==20){
        break;
    }
}

// do- While
// pehle jaana hai -> phir puchhna hai rukna hai ya nahi -> phir repeat kaise karna hai

// Syntax -> do{}while(condition){}

let j = 1;
do{
    console.log(j);
    j++;
    if(j==20){
        break;
    }
}while(j<=50);


// break and continue

// break
// break is used to break the loop

// continue
// continue is used to skip the current iteration

