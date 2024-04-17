//if

if(true){  //if(2==2)
 
}

const isUserLoggedIn = true
if(isUserLoggedIn){

}

if(2 == "2"){
    console.log("executed");
} else{

}

//<,>,<=,>=, ==, !=, ===, !==
// = assigment operator
// == equal (check)
// === checks data type 
//scope

//short hand notation //implicit scope

const score = 1000
if (score>500) console.log("test");

//if(score>700) console.log("test2"), console.log("hey");


//nesting

if(score < 500){
  console.log("less than 500");
}
else if(score<750){
    console.log("less than 750");
}
else if(score<900){
    console.log("less than 900");
}
else{
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedGoogle = false
const loggedApple = true

if(userLoggedIn && debitCard){
    console.log("");
}

if(loggedApple || loggedGoogle){
    console.log("");
}
