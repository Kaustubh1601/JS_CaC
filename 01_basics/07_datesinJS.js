//Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);  //object

let myCreatedDate = new Date(2023, 0, 23)
//Dtae(2023, 0, 23, 5, 3), ("2023-01-14" yy-mm-dd)
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

//always compare in ms

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());//+1
console.log(newDate.getDay());


//`${}`

newDate.toLocaleString('default',{
    weekday : "long",
})




 