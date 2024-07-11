// imp for INTERVIEW PREPARATIONS
//truthy :- it means we assumed some values that is true or false 

//for example
const userEmail="athukulk@gmail.com";

if(userEmail){
    console.log(`got user email`);
}else{
    console.log(`dont have user email`);
}

const userName=[];
if(userName){
    console.log(`got user name`);
}else{
    console.log(`dont have user name`);
}
// in this case we didnt mentioned any value in the condition still got 
// the ans its means in truthy it assumed the values that is true or false

//types of truthy and falsy values
//FALSY values= 0,-0,bigInt.empty " ",null, undefined
//truthy:- expect those all are truthy values:- 
//"0" 0 inside string is truthy
//"false":- truthy
//" ":- truthy
//[ ]:- truthy
//{}empty object:- truthy
//function(){} empty function:- truthy

// how to check the array is empty or not using condition

const newArray=[];
if(newArray.length===0){
    console.log(`array is empty`);
}else{
    console.log(`array is not empty`);
}

//how to check the object is empty or not

const newObj={};

if(Object.keys(newObj).length===0){
    console.log(`object is empty`);
}else{
    console.log(`obj is not empty`);
}

// only for interview

// false ==0; is true
// false == " "; is true;
// 0==" "; is true;

// null colaescing operator

let val1;
// val1= 5 ?? 10;
// val1=null ?? 10;node LogicControlFlow/truthy.js

val1=undefined?? 10;
console.log(val1)

//terniary operator
// condition ? true : false;// alternative of if and else

const price=100;
price >=80 ?console.log(`${price} price is to high`) : console.log(`price is  cheap`);