//Forin loop 
// in this loop we can use object
// we cant use map in forin loop coz its not iteratable

const mylan={
    firts:"marathi",
    second:"hindi",
    third:"english"
}

for (const key in mylan) {
   console.log(`${key} language is ${mylan[key]}`);
}

const lines=[1,2,3,4,5,6,7]

for (const num in lines) {
    console.log(lines[num])
    
}