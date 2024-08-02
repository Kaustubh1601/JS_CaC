const user = {
    username: "km",

    getUserDetails : function(){
        console.log(`Username: ${this.username}`);
        console.log(this);
    }
    
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this); //-> global context {} / window object
//this->current context


const promiseOne = new Promise()
const date = new Date()
//new->constructor

function User(username){
    this.username = username;

    return this //object pass-on
}

const userOne = User("km")  //add new
const userTwo = User("Cac") //add new
console.log(userOne); //Cac

