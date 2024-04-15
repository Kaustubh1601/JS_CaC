
function welcome(){
    console.log("Kmishra");
}

welcome()
//welcome -> reference

//function sum(number1, number2){ //parameters
  //  
    //console.log(number1 + number2);
//}

function sum(number1, number2){ //parameters
    
    //let result = number1 + number2
    //return result
    //console.log(); //wont execute after return...
    return number1 + number2
}

//sum(3, 4) //arguments
//sum(3, "4") //34
//sum(3, "a") //3a

const result = sum(3, 4)

//console.log("Result: " , result);

function message(username){
    if(username === undefined){          //!username //undefined
        console.log("please neter an username");
        return 
    }
    return `${username} just logged in`
}

//console.log(message("KM"));
console.log(message());
//defualt value, username = "user"

function calculateTotal(val1, val2, ...num1){    //REST operator
    return num1;
}

console.log(calculateTotal(200, 400, 800)); //array [200, 400, 800]
//200->val1, 400->val2, rest num1

const user = {
    username: "KM",
    price: 199
}

function handleObject(anyObject){
  console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username:"K",
    price: 8999
})

const myNewArray = [200, 400, 100, 600]

function returnsecond(getArray){
  return getArray[1]
}

console.log(returnsecond(myNewArray));
console.log(returnsecond([200, 400, 800]));