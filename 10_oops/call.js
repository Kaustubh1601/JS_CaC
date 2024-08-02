function setUsername(username){
    //complex DB calls
    this.username = username
}

function creatUser(username, email, password){
    setUsername.call(this, username)
    //to hold reference -> .call //to get the reference -> this
    this.email = email
    this.password = password
}

const chai = new creatUser("chai", "chai@fb.com", "123")
console.log(chai);
