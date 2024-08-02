let myName = "km"

console.log(myName.length);

let name = "km     "
//truelength
//name.trim().length
console.log(name.trueLength());  //undefined
//challenge



let myHeroes = ["thor", "captain"]

let heroPower = {
    thor: "hammer",
    captain: 'shield',
  
    getCapPower : function(){
        console.log(`Captain power is ${this.captain}`);
    }
}

Object.prototype.km = function(){
    console.log(`km is present in all objects`);
}

Array.prototype.hrykm = function(){
    console.log(`hi`)
}

//heroPower.km() //string
myHeroes.km() //array
myHeroes.heykm();
//heroPower.heykm() //no


//Inheritance

const User = {

}

const Teacher = {

}

const TASupport = {
 makeAssign : 'JS assign',
 __proto__: Teacher
}

Teacher.__proto__ = User 

//modern syntax
Object.setPrototypeOf(TASupport, Teacher)


let x = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`${this.name}`); //undefined->obsolete property
    console.log(`True length is: ${this.trim().length}`);
}

x.trueLength();
"km".trueLength();

