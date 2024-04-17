const userEmail = []

if(userEmail){
    console.log("got your email");
} else{
    console.log("No response");
}

//"xx"->true, ""->flase, " "->true

//falsy values

// false, 0, -0, BigINt 0n, null, NaN, undefined, ""

//truthy values
//"0", 'false', " ", [], {}, function (){} ->empty function

if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing operator (??) : null undefined
//null safety check

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 30 //10 which comes first

console.log(val1);

//ternary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");