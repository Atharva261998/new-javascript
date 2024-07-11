// if .. else statement we used for comparision
//Syntax:-
// if and else if  executs only the condition is true otherwise not 
// const shoes=200;

// if(shoes>150){
//     console.log(`${shoes} rupees shoes is very costly`)
//     const companyName="nike";
//     console.log(`Company Name is = ${companyName}`)
// }
// else{
//     console.log(`shoes is cheap`)
// }

//multiple conditions
const userLoggedIn=true;
const loggedInWithCard=true;
const loggedInViaGoogle=true;
const loggedInViaEmail=false;

if(userLoggedIn && loggedInWithCard && loggedInViaEmail){
    console.log("regidtered succefully");
}else if(loggedInViaEmail || loggedInViaEmail){
    console.log(`Logged in via google`);
}else if (loggedInViaEmail){
    console.log(`user should not prefer email`);
}else{
    console.log(`login failed`);
}