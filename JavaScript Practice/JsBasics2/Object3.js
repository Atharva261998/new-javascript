//===================Object destructuring and APIs =============

crashCource={
    teacher: "xyz sir",
    fees:4567,
    venue:"My place"
}

// console.log(crashCource.teacher);

const{teacher : sir}=crashCource
console.log(sir);

const badminton={
    racket:"yonex",
    shoes:"lining",
    tshirt:"victor"
}

const {shoes: pairs}=badminton
console.log(pairs);

//=====================APIs====================
// we can get tw0o types odf api
//object format

// {
//     "sport":"cricket",
//     "batsman":"bat",
//     "bowler":"ball",
//     "filder":"field"
// }

//array format
[    
    {},
    {},
    {}
]
