//primitive: call by value
//: String, Number, null, undefined, Symbol, Boolean, BigInt



//Non-primitive: Reference
//Arrays, Objects, Functions

//JS ->static or dynamic?

//const score = 100
//const scoreValue = 100.3

//const isLoggedIn = false
//let user; undefined.

const id = Symbol('123')
const accountId = Symbol('123')
//Not Equal...===

//const bigNumber = 3235546563233253n;

const heros = ["ironman","thor"]

let myObj = {
    name: "km",
    age:22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof(myFunction));


//visit ecmaScript!!!!!!!!!!!!




//stack(primitive)->copy, Heap(Non-primitive)->reference!

let myName = "Km"
let anotherName = myName
anotherName = "Chaiaurcode"

console.log(myName);
console.log(anotherName);


let userOne ={
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Km@google.com"

console.log(userOne.email);
