//For Loop
// for (i=0;i<=10;i++){
//     const newValue=i;
//     console.log(i);

// }  

// include loop inside loop
// for(i=1;i<=10;i++){
//     console.log(`outer loop value is : ${i}`);
//     for (j=1;j<=10;j++){
//         console.log(`the inner loop value is ${j} and outer value ia ${i}`);
//     }
// }

//include if statement in the loop

// for(k=1;k<10;k++){
//     console.log(k)
//     if (k<5){
//         console.log(`from 5 welcome to the new category`)
//     }
// }

//write the table till 10

// for (a=1;a<=10;a++){
//     console.log(`tbale  ${a}`)
//     for(b=1;b<=10;b++){
//         console.log(`${a} table = `+a*b);
//     }
// }

// const myArray=[1,2,3,4,5,6,7,8,9]

// for (i=1;i<myArray.length;i++){
//     const ans=myArray[i]
//     console.log(ans);
// }
//break and continue

// if we have to break the control flow then we will use break
// for(i=1;i<=10;i++){
//     if(i==5){
//         break;
//         console.log(i)   
//     }
//     console.log(i)
// };

//continue will skip the value and executs the another values
for(i=1;i<=10;i++){
    if(i==5){
        continue;

        console.log(`continue after ${i}`) 
    }
    console.log(i)
};
    

