//Reduce 
// mainly used in shopping application for adding the values

arr=[1,2,3]

const newArr=arr.reduce((acc,curval)=> acc + curval,0)
// console.log(newArr);

//using object of shopping cart

const shopping=[
    {
        shoes:"nike",
        price:1000
    },
    {
        shoes:"adidas",
        price:800

    },
    {
        shoes:"puma",
        price:700
    }
]
   
const Total=shopping.reduce((accu,value)=> accu + value.price,0)
console.log(Total);

const newTotal=shopping.reduce((ac,cv)=> ac - cv.price,1)
console.log(newTotal);