// //create promise

// const promiseFour=new promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//             resolve({userName:"Ayush",surname:"kulkarni"});
            
//         }else{
//             log("something went wrong")
//         }
//     },1000)
  
// })
// //want only user name
// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.userName
// })
// .then((userName)=>{
//     console.log(userName);
// })
// .catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("The promise is either resolve or rejected");
// })

//Promise 5
//handel promise with async await



const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(error){
            resolve({name:"Atharva",surname:"kulkarni"})
        }
        else{
            reject("rejected")
        }
    },1000)
})
promiseFive.then((username)=>{
    return username.name
    
})
.then((name)=>{
    console.log(name);
}).then((surname)=>{
    console.log(surname);
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})

//promise 6

//fetch

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>console.log(data))
// .catch((error)=> console.log(error))

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()      // response laai return gareko
// })
// .then((data) => {               // data laai handel gareko
//     console.log(data);
// })
// .catch((error) => console.log(error))



fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
}).catch((error)=> console.log(error))