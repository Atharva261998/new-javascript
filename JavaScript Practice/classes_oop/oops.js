// //
// // const myObj={
// //     name:"ATharva",
// //     logIn:true,
// //     registeration_no:123 
// // }


// //     console.log(myObj.name)

// // //constructure function
// //using constructor function we can pass the the same function multiple times for different values

// //it wiil create seperate instance for every call log
// // const promiseOne=new Promise()
// // const date=new Date();
// //new keyword is the constructure function
// // we can use this new keyword to create new context

// //how it works constructur function:-it will give new instance or copy every time
// //this keyword is an object

// //WHy we use new keyword
// //its a constructure function we use new keyword it will avoid to overwrite the values

// /*
// Facts about new keyword
// new always give new instance 
// 1.this keyword will generate empty object
// 2.bcoz of new keyword the constructure function will call it will pack all arguments and give
// 3.all arguments will inject in this object
// 4.get as a output
// */

// function user(UserName,loginCount,isLoggedIn){
//     this.UserName/*this is variable*/ =UserName;// this is parameter
//     this.loginCount=loginCount;
//     this.isLoggedIn=isLoggedIn;

//     this.greeting=function(){
//         console.log(`welcome ${this.UserName}`)
//     }
//     this.sayHiToUser=function(){
//         console.log(`Hi ${this.UserName}`)
//     }
//     // return this //over here we passed on the object now user can easily access the value in between the object
// }

// const userOne= new user("Atharva",2,true)
// console.log(userOne);

// constUserTwo= new user("AYush",2,true)
// console.log(constUserTwo);


// function cricketer(Name,age,style){
//     this.Name=Name;
//     this.age=age;
//     this.style=style;

//     this.greeting=function(){
//         console.log(`welcome ${this.Name}`)
//     }
//     // return this
// }

// const crickter1=new cricketer("Virat",32,"batter")
// console.log(crickter1);
// const crickter2=new cricketer("Rohit",34,"batter")
// console.log(crickter2);

function wishlist(Item1,Item2,Item3){
    this.Item1=Item1;
    this.Item2=Item2;
    this.Item3=Item3;
    return this
}

let wishlist1= new wishlist("football","cricket ball","tennis ball")
let wishlist2= new wishlist("bat","pad","gloves")

console.log(wishlist1);
console.log(wishlist2);

//call method

function setName(firstName){
    this.firstName=firstName;

}

function setRemaining(firstName,email,empId){
    setName.call(this,firstName)
    this.email=email;
    this.empId=empId;
    return this
}

const ans=new setRemaining("Atharva","athukulk",456)
console.log(ans);

function newUser(name,gender,id){
    this.name=name;
    this.gender=gender;
    this.id=id
}
    upperUserName(){
        return `${this.name}`

    }
    

    const chai=new newUser("Atharva","male",1234)
    console.log(chai.upperUserName());

//  const giveMeAns=new newUser("Prachi","female",456789)
//  console.log(giveMeAns);

 