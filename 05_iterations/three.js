//for of

//["", "", ""]
//[{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) { //object->thing
      console.log(num);
}

const greetings = "hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
}

// Maps object which holds keys value
//maintains order and uniqueness

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) { 
    console.log(key, ':-', value);
}

//objects are not iterateable

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
