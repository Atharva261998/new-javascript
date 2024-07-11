//for each loop 
// need for each in for each it ask about the callback function
// foreach loop do not return any value 

const arr=["ath","ayu","vid","gaj"]

// arr.forEach(function(elements){
//     console.log(elements);
// })

// arrow function
arr.forEach((item)=>{
    // console.log(item);
})

function ball(good){
    // console.log(good);
}
arr.forEach(ball);

// in foreach we have multiple parameters like item,array,index
// it wil give what are the elements in array their index and whole array
newarr=[1,2,3,4,5]
newarr.forEach((nodes,index,arr)=>{
    console.log(nodes,index,arr);
})

// most common scenario is most of time will get a array and object inside 
const myCoding=[
    {
        lanName:"js",
        lanFileName:"javascrips"
    },
    {
        lanName:"java",
        lanFileName:"javvvaaa"
    },
    {
        lanName:"python",
        lanFileName:"pythn"
    }
]

myCoding.forEach((node)=>{
    console.log(node);

})


myCoding.forEach((val)=>{
    // console.log(val.lanName);
    // console.log(val.lanFileName);
})

myCoding.forEach((ele)=>{
    // console.log(ele.lanName);
})