//immediately invoke function expressions(IIFE)
//Interview
// why we use iife 
//Ans:- it will prevent the scope from polution og global environment 
//syntax:-()()
//named IIFE
(function chai(){
    console.log(`My Name is Atharva`)
})();
//above line the function is invoked but it will not know where to stop the context thats why 
//for IIFE the ; is importanrt

// Arrow IIFE
((name)=>(console.log(name="Atharva")))();

//Simple IIFE
//another example of IIFE
(  (no1,no2)=>(
    console.log(`the addtion is ${no1+no2} `)
)   )(5,4)