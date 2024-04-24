//for

for (let i = 0; j < 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is the best number");
    }
    console.log(element);
    
}

for (let i = 0; i <=10; i++) {
    console.log(`${i}`);
    for (let j = 0; j < array.length; j++) {
        //console.log(`${j}, ${i}`);
        
    }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {  //<= undefined
    const element = myArray[index];
    console.log(element);
    
}

//break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        break;
    }
    console.log(`${index}`);
    
}
for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log("detected 5");
        continue
    }
    console.log(`${index}`);
    
}

