const coding = ["js", "ruby", "java"]

//coding.forEach( function (val){
  //  console.log(val);
//})

//coding.forEach( (item) => {
  //  console.log(item);
//})

//function printMe(item){
//    console.log(item);
//}

//coding.forEach(printMe)  //reference


//coding.forEach( (item, index, arr) => {
//    console.log(item, index, arr);
//})

const myCoding = [
    {
      languageName: "javascript",
      languageFileName: "js"
    },
    {
    languageName: "java",
      languageFileName: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})
