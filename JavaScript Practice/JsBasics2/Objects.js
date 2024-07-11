// if we declear the object as literals then it will not make singleton
// with construction it will make singleton
// if you want to write the symbol in objects the use [] bracketsxx

//=================object literals**************************************

const jsUser={
    name:"Atharva",
    id: 34567,
    phoneNo:345678,
    myArra:[1,2,3,4,5,],
    isLogIn:true,
    lgInDays:["Monday,Tuesday"]
    
}

//Add function in the object 

// jsUser.greeting=function(){
//     console.log("Good morning")
// };

// console.log(jsUser.myArra);
// console.log(jsUser.id);

console.log(jsUser.name="Ayush");
// 

//accesing inside the function

jsUser.Hello= function (){
    console.log(jsUser.name)
}
console.log(jsUser.Hello())

jsUser.Hi=function (){
    console.log(`Atharva, $(this.name)`);
}
console.log(jsUser.Hi());

console.log(jsUser.Hi());