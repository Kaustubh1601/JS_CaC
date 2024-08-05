class User {
    constructor(email, password){
        this.email = email
        tjis.password = password
    }

    get password(){
        return this._password.toUppweCase() //
    }

    set password(value){
        this._password = value.toUpperCase() //
    }
}

const km = new User("k@m.com", "abc")
console.log(km.password);

//max call stack size exceeded