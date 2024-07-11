// // function Addition(number1 , number2){
// //     console.log(number1+number2)
// // }

// // Addition(3,4);

// function multiply(number1, number2){
//     return number2*number1
// }

//     let ans=multiply(6,4)

    
// function userLoggedIn(Username){
//     return`${Username} this user is logged in `
// }
// console.log(userLoggedIn(" "));
// // console.log(User);

// function password(newPassword){
//     if(newPassword === 2345){
//         return `${newPassword} ,is correct`
//     }
// }

// console.log(password(23456));

function logInPage(name,password){

    // console.log(password)

    if(name === "Ayush" && password===12345){
        return `${name}, name is correct`
    }
    else{
        return`name is incorrect`
    }
    
}

// console.log(logInPage("Ayush",12345));

//user is logged in need to send the message that user is logged in successfully

function logIn(Password){
    if(Password===12345){
        return `user logged in successfully`
    }
}

// console.log(logIn(12345));

function pleaseLogin(name){
    return`${name}, loggin in`
}

// console.log(pleaseLogin("Ayush"));

//////===================Functions shopping cart usage================
// how to use
//rest operator:- it bundels every argument and give the output (...)

function newNumbersArray(...num1){
    return num1
}

// console.log(newNumbersArray(200,300,400));
// using rest operator we will get the output in array form

//================object using functions==================

// const userSignIn={
//     UserName:"efgbn",
//     UserId:4567,
//     userEmail:"dfghjhgcx"
// }

function handelObject(anyobject){
    return `The user name is ${anyobject.UserName} and the userEmail is ${anyobject.userEmail}`

}
console.log(handelObject({
    UserName:"efgbn",
    UserId:4567,
    userEmail:"dfghjhgcx"
}))
// 
//============we can pass arrays also inside it======================

// const myArray=[1,2,3,4,5,6,7,8,9,0];

function handelArray(anyArray){
    return `The first index from array is ${anyArray[1]}`

}
console.log(handelArray(myArray=[1,2,3,4,5,6,7,8,9,0,]));

