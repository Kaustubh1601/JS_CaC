const user ={
    username : "km",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.welcomeMessage() //
user.username = "Sam" //
user.welcomeMessage() // 


//console.log(this); //empty{} node //window->browser

// function chai(){
//    let username = "km"
//    console.log(this.username);  //undefined, function
//}
//chai()

//const chai = function(){ 
  //  let username = "km"
    //    console.log(this.username); 
//}

const chai = () => {
    let username = "km"
    console.log(this.username); //undefined //this {}
} 

chai()


//const addTwo = (num1, num2) => {
    //return num1 + num2
//}

//implicit return 
//const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username :"km"})
//{}-> use return, ()->no need to use return //react


console.log(addTwo(3,4));

const myArray = []
myArray.forEach(() => ())