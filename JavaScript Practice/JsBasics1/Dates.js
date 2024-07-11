let newDate= new Date();
// console.log(typeof newDate)

// console.log(newDate);

// console.log(newDate.toDateString());
// console.log(newDate.toISOString());
// console.log(newDate.toJSON());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleTimeString());

// console.log(newDate);

let myCreatedDate= new Date(Date.UTC(1998,6,26,19,30,0));
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

//Get time is use for time stamp
// let myDate= Date.now();
// // console.log(myDate.toLocaleString());

// console.log(myDate.getTime());


let myDate= new Date();
// console.log(myDate);

//====================some other methods ====================
// Date is a object itself

// VERY IMP
// tolocalstring is very imp 
// console.log(myDate.toLocaleString("default",{
//     weekday: "short"
// }));

// console.log(myDate.toLocaleString("default", {
//     Date: myDate
// }))
const theDate=new Date();
console.log((theDate.toLocaleString("default",{Date:theDate}))); 

const newName= "Atharva";
// console.log(newName.slice(0,2));

// let no;

// console.log(Math.floor((Math.random(no)*10*50)));

// const date=new Date();
// console.log(date.toDateString());

// console.log(date.toDateString());


