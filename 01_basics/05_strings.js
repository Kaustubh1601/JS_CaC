const name = "Km"
const repoCount = 4

//console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);   //string interpolation

const gameName = new String('KMishra-com');

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(2));

//console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);  //[0,3]
//console.log(newString);

const anotherStr = gameName.slice(-7, 4)
//console.log(anotherStr);

const newStringOne = "  Km  "
//console.log(newStringOne.trim());

const url = "https://km.com/k%20m"
//console.log(url.replace('%20','-'));

//console.log(url.includes('kaustubh')); //false

console.log(gameName.split('-'));
