// this is called scope
// //
// {

// }

// CLOUSERS========================================================

// function newFun(){
//     let Name1="Atharva";
//     var Name2="Ayush";
//     const Name3="nick";
    
//     function childFunction(){
//         let newchild="Ath"
//         console.log(Name1);
//     console.log(Name3);
//     console.log(Name2);
//     }
//     console.log(newchild);
//     childFunction();
//    }

// newFun();
// clousers=====================
//Clousers:- child function can access the variable of parent function but 
//parent cant its called clousers
function one(){
    const name1="Ayush";

    function two(){
        const name2="Atharva"
        console.log(name2)

    }
    console.log(name1)

    two();

}
one();

//Same logic is applicable for if and else

// if(true){
//     const clas="rich"
//     if(username === "Atharva"){
//         console.log(clas);
//     }
// }

//============Hoisting============================
//cannot acces the function before initilization that is called hoisting
console.log(Addition(5));
function Addition(no){
    return no +1
}

console.log(sub(5));

let sub = function minus(no){
    return no -1
}
