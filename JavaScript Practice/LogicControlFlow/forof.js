// forin loop,forOf loop,for each loop
// most common usage 
//=================For of loop =================
// most commenly this loop is use for array and map object will not work uder for of loop

//for of loop for array

const newArr=[1,2,3,4,5,6,7]

for(const arr of newArr){
    // console.log(arr);
}

const myArr=[0,9,8,7,6,5,]

for(const my of myArr){
    if(myArr== my){
        console.log(`great`);
        // break;
    }
    // console.log(my);
}

nestr="qwertyui"
for(const nstr of nestr){
    // console.log(`${nstr}:- wow`);
}

//MAPs is like an array its having iterations and having unique values
// Map is an object which holds key value pairs
// it knows the order of intertion
// it holds uniques value


const map=new Map();
map.set("name","Ayush")
map.set("surname","kulkarni")
// console.log(map);

for(const [key , value] of map){
    // console.log(key,value);
}

// const obj={
//     name:"ayush",
//     surname:"kulkarni"
// }
// for(const myObj of obj){
//     // console.log(myObj);
// }

const newMap=new Map();
newMap.values("ath","arv")
newMap.values("kul","kar")

for(const mp of newMap){
    console.log(mp);
}