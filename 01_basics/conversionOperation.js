let score = "32"  

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);


//"32"-> 32
//"32abc"->NaN->number
//true->1 false->0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


//1->true 0->false
//""->flase
//"Km"->true

let someNumber = 32

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);