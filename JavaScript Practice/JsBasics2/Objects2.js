// how to declear the object with the help of constructure
//this method is called singleton 
const tinderUser=new Object();
//IMPORTENT
tinderUser.id=3456;
tinderUser.name="atharva";
tinderUser.email="atharva@gmail";
tinderUser.isLoggedIn=true;
//  console.log(tinderUser);
/* 
keys 
values
entries

*/
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

 //nested objects

//  const nestedObjects={
//     id:45678,
//     newInfo:{
//         name:"Atharva",
//         class:"A class"

//     }

//  }

//  console.log(nestedObjects.newInfo.class);

 // combining the objects
 const obj1={
    1:"Nikhil",
    2:"Ram",
 }
 const obj2={
    3:"Atharva",
    4:"Ayush",
 }
//Syntax use assign is compulsary 
// const obj3= Object.assign({},obj1 ,obj2);
// const obj3={...obj1,...obj2}
// console.log(obj3);

//IMPORTENT================Database values===============
//once will get the values from database following syntax we have to use
//Will get values in object nested in array format
const users=[
    {name:"Atharva",
        id:34567
    },
    {name:"Ayush",
        id:34567
    }
]
console.log(users[1].name);