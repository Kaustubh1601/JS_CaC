const marvel_heroes = ["thor", "ironman", "captain"];
const dc_heroes = ["superman", "flash", "batman"];

marvel_heroes.push(dc_heroes);

console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);
//concat returns new array

const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);

//spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);

const b_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
const c_array = b_array.flat(Infinity)
console.log(c_array);

console.log(Array.isArray("Kaustubh")); //false
console.log(Array.from("Kaustubh"));

console.log(Array.from({name:"Kaustubh"})); //empty array //interesting

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));


