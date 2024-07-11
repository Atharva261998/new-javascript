// use this with normal function
//register one user
//This keyword shows the context of the scope
// which is the global object in browser :- window object

// const User={
//     userName:"Ayush",
//     Password:"5678",
//     fees:900,

//     welcomeMessage:function(){
//         console.log(`Hi ${this.userName}, welcome to the web site`)
//         console.log(this)
//     }
    
// }
// User.welcomeMessage();
// User.userName="sam";
// User.welcomeMessage();
// console.log(this)// this showing empty because this consoe is in global scope and currently
// we do not have any context 

//=============================Arrow function=================
//We cannot use this keyword inside the functions it can be use in objects 
function chai(){
    let userName="Ayush"
    console.log(this.userName)
}
// chai();
//Inside the function if you just print this then it will give {} parantheses
// Basics syntax of arrow function
// () => {}
const nvBar=()=>{
    let firstOption="search"
    console.log(this)
}
nvBar();

//Example of basic arrow function:- EXPLICIT RETURN
const Addition=(no1,no2) => {
    // console.log( no1 + no2)
}
Addition(5,5)
//==========implicit return :- it means you have to assume the return
//if you use curly breces then you should use return
// otherwise capsulated in the parantheses

const sub=(no3,no4)=>(no3-no4)
// console.log(sub(5,7))

///======RETURN THR OBJECT INSIDE FUNCTION USE ARROW FUNCTION
const fun=()=>(
   {
    Name:"Ayush",
}
)

console.log(fun());