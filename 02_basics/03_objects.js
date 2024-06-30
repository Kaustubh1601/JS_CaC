//singleton
//Object.create
//literals

//symbol
const mySym = Symbol("key1")

//object literals
const JsUser = {
    name : "Kaustubh",
    Age : 22,
    email : "km@gmail.com",
    "status" : "active",
    [mySym] : "mykey1"  //[] for symbol

}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["status"])
console.log(JsUser.mySym)  //string 
console.log(JsUser[mySym])

JsUser.email ="mishra@google.com"
Object.freeze(JsUser)

JsUser.email ="mishra@gmaile.com" //wont change
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("hi js user");
}

JsUser.greeting2 = function(){
    console.log(`hi js user, ${this.name}`);
}

//console.log(JsUser.greeting); //() 
console.log(JsUser.greeting()); 
console.log(JsUser.greeting2());