const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));   

const otherNumber = 23.8966      //->23.9  //123.8966 ->124

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocalString('en-IN'));

//+++++++++++++++++ Maths +++++++++++++++++++

console.log(Math);   //object
console.log(Math.abs(-4));   //4

console.log(Math.round(4.3));  //4  //4.6->5

console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.9)); //4

console.log(Math.min(4,3,9,6));
console.log(Math.max(3,5,4,6));

console.log(Math.random());   //0-1
console.log(Math.random()*10 + 1);  //1-10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random()*(max - min + 1)) + min);





