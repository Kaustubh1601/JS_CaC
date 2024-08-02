//ES6

class User {
    constructor(username, email, password){
        this.email = email
        this.username = username
        this.password = password
    }

    encryptPassword(){  //method
       return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("chai", "chai@gmail.com", "123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

//BTS

function User(username, email, password){
        this.email = email
        this.username = username
        this.password = password
}

User.prototype.encryptPassword = function(){
        return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User("tea", "chai@gmail.com", "123")
console.log(tea.encryptPassword());
console.log(tea.changeUsername());