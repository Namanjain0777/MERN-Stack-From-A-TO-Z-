// Truthy vs falsy values
// falsy values: 
//  0 , false . "" , null , undefined , NaN ,document.all

// other than this all are truthy value (e.g : -1 , "0" , "false" , [] , {} , function(){}, . etc ) 
// Trick to know its falsy value
console.log(!!0);  

if(function(){}){  //js automatically convery to truthty and falsy value
    console.log("true");
}else{
    console.log("false");
}