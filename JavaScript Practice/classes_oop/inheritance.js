// class user{
//     constructor(userName){
//         this.userName=userName
//     }

//     logMe(){
//         console.log(`welcome student ${this.userName}`);
//     }
// }

// class teacher extends user{
//     constructor(userName,email,password){
//         super(userName)
//         this.email=email;
//         this.password=password;
//     }

//     addCourse(){
//         console.log(`new course was added by ${this.userName}`)

//     }
// }

// const StudTracher= new teacher("chai","athukulk",123)
// console.log(StudTracher);

class newUser{
    consturctor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`user is successfully loggedIn Thanks ${this.userName}`);
    }
}
const username=new newUser("Atharva")
class teacher extends newUser{
    constructor(userName,email){
        super(userName)
        this.email=email
    }

    teachersID(){
        return 123
    }
}

const finalAns=new teacher("athukulk@gmail.com")
finalAns.logMe();