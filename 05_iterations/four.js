const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//for in

for (const key in myObject) {
    console.log(`${key} : ${myObject[key]}`);
    }

const programming = ["js", "ruby", "java"]

for (const key in programming) {
    console.log(key); //key values->0,1,2... array has keys
    console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key); //nothing-> map is not iteratable.
}


    