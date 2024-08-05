 const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

 console.log(descriptor);
 //value: 3.14....
//writeable: false
//enumerable: false
//configurable: false
 
 console.log(Math.PI);
 Math.PI = 5
 console.log(Math.PI);

// const mynewObj =  Object.create(null)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    function(){
        console.log('chai nhi bni');
        
    }
}

//console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
//property //true

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false  //true->
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
