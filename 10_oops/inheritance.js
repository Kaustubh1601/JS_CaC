class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) 
        //refers to extended class, autom. renders this, with direct access
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()
chai.logMe()

const masalaChai = new User("masalachai")
masalaChai.addCourse()//no access
masalaChai.logMe()

console.log(chai === masalaChai); //false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User); //true


