// //promise is an object
// //Promises represents the eventual completion or failure of async operation
// //and its resulting value
// /*
// Three states of promises
// Pending 
// fullfilled
// rejected

// mostly we have to consume the promises
// but sometimes need to create the promise
// having two parameters resolve and reject both are methods

// */

// //How to create promise
// //while promise creation we will get one function
// const newPromise01= new Promise((resolve,reject)=>{
//     // do an async task
//     //Data base calls ,cryptography
//     setTimeout(()=>{
//         console.log("async operation is completed")
//         resolve()
//     },2000)

// });

// //promise consumption 
// /* 
// while consumption we use .then it having direct connection with "resolve"
// in resolve will get one callback function it will return the the output of the function
// */

// newPromise01.then(()=>{
//     console.log("consumption done");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("ATharva");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Async Atharva resolve");
// })

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("first async task")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("first async task");
// })

// //how to paas the data inside the promise the data coming fromdatabase and network
// const promise3=new promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({name:"Atharva",surname:"Kulkarni"})
//     },2000)
// })
// promise3.then((user)=>{
//     console.log(user);
// })

// use of reject and .catch() 
//how to avoide callback hell
//Very imp .then chaing its use to retrive the perticular data from database
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(error){
            resolve({name:"ATharva",surname:"kulkarni"})
        }
        else{
            reject("rejection");
        }
    },1000)
}).then(()=>{
    console.log("response successful")
}).catch(()=>{
    console.log("response failed");
})