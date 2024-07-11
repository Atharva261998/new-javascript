// premetive datatypes - this datatypes are call by value 
// in this will get copy data for change original data remains same

/* 
types of premetive 
string 
number
boolean
null
undefined
symbol
BigInt
*/

/*Reference Datatype (Non Premetive)
they will provide reference of original value

array 
objects 
functions
*/

/* is js dynamic or static */ 
// let colors=["red"."green","blue"]
// let colorObject={
//     car:"red",
//     leaf:"green",
//     sky="blue"
// }

// const toAdd=function toAdd(){
//     return (A+B)
// }

// +++++++++++++++++++Memory+++++++++++++++++++++++++//

//we have to types of memory
/*
stack:- premetive datatypes(Usage)
once will use stack memory will get copy of it

heap:- non-premetive (Usage)
If we use heap memory it will chnage the original
*/ 

let man= "Atharva";
let man1=man;
 man1="Ayush"

man=man1;
console.log(man);
console.log(man1);

let data={FirstName:"Atharva",
    Lastname:"kulkarni"
}

let data1=data;
data1.FirstName="Ayush";

console.log(data);
console.log(data1);