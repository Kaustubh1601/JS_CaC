//array

const myArr = [0,1,2,3,4,5] ///true, etc. any type
//resizable, mix, 0 base indexing
//copy operation-> shallow copy->same reference
//deep copies->

console.log(myArr[0]);

const myArr2 = new Array(1, 2, 3, 4)

//methods
myArr.push(6);
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.unshift(9)   //shift()
console.log(myArr); 

console.log(myArr.includes(9));  //boolean
console.log(myArr.indexOf(8));   //-1

const newArr = myArr.join()   //converted to string

//slice, splice

const myn1 = myArr.slice(1,3); // 1,2
const myn2 = myArr.splice(1,3) //1,2,3   [0,4,5]


