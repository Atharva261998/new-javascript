///MAP
// use to create new array applying function on each element

newArr=[1,2,3,4,5,6,7,8]

const newmap=newArr.map((ele)=>ele*10)
// console.log(newmap);
const myMap=newArr.map((ele)=>ele+5)
console.log(myMap);
//chaining in maps

const chaining=newArr
.map((chain)=> chain*5)
.map((chain)=>chain+1)
.filter((chain)=> chain>20);

// console.log(chaining);