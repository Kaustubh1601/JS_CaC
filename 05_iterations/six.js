const coding = ["js", "ruby", "java"]


const values = coding.array.forEach( (item) => {
    console.log(item);     //return 
    return item
});

console.log(values); 
//values will be printed, but undef returned.
//forEach doesnt return any values.


//const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNums.filter( (num) => num > 4 )  //requires callback fn //returns value
//console.log(newNums)

//const newNums = myNums.filter( (num) => {
  //  'return' num > 4
// } ) 

const newNums = []

myNums.forEach( (num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums);
