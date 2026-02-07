// ForEach

let arr = [11,154,463,765,342];

arr.forEach(function(num){
    console.log(num)
})


// map 
// sirf tab use karna hai jab aapko ek naya array banana hai pichhle array ke data ke basis par
//jab bhi aapko aise koi case dikh jaye jaha par ek array se naya array banega and wo naya array kuch values ko rakhega tab map lagega
let mapArr = [11,154,463,765,342];
// map dikhta hi saath man mwin ek black array bana liya karo
let newarr = arr.map(function(val){
    // return val+1;
    //return  //it give undefined
    if(val>200)return val;
})

console.log(newarr)


// filter
let filArr = [1,2,3,4,5,6,7,8,9]

let filterArray = filArr.filter(function(val){
    if(val>4) return true;
})

console.log(filterArray)



// Reduce
let redArr = [ 1,2,3,4,5,6];
// Accumulator is like a past value of the return like its acc = acc + val;
let reduceArray = redArr.reduce(function(accumulator , val){
    return accumulator+val;
},0)   //always give initial value

console.log(reduceArray)


// find -> always give first match 
let nums = [1,2,3,1,4,5,6];
let fi = nums.find(function(val){
    return val ==1;
})

console.log(fi);  


// some -> At least One true  | return boolean value 
let so = nums.some(function(val){
    return val > 4;
})
console.log(so)


// every

let ev = nums.every(function(val){
    return val>3;     // is val>0 ->true
})
console.log(ev);