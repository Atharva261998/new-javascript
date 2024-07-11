//filter
// filter is used for filtering the array it includes the condition
// it will return he value and need to store in variable 

myarr=[1,2,3,4,5,6,7,8,9]

//inthis case output will be in boolean because first it will verify the condition then give the output in boolean form
// const newArr=myarr.filter((item)=> {
    // console.log(item>6) })
// console.log(newArr);

const wow=myarr.filter((ele)=>{
    return ele<6
})
// console.log(wow)

myarr.forEach((item)=>{
    // console.log(item.m); 
})   
// console.log(values);

newnum=[];
wowarr=myarr.forEach((item)=>{
    if(item>4)
        newnum.push(item)
})
console.log(newnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const newBook=books.filter((book)=> book.title ==="Book One")
  console.log(newBook);

  const newBooks= books.filter((book)=>{
    return book.publish > 1981
  })
//   console.log(newBooks);

const newGenre= books.filter((gen)=>{
    return gen.genre==="Non-Fiction" && gen.publish > 1990;
})
// console.log(newGenre);

const curTime= new Date();
console.log(curTime);
const curHours=curTime.getHours();
console.log(curHours);
const curMin=curTime.getMinutes();
console.log(curMin);
const curSec=curTime.getSeconds();
console.log(curSec);

const properTime= curHours+":"+curMin+":"+curSec+ " " + "PM";
console.log(properTime);