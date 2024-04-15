

if(true){
    let a = 10
    const b = 20
    //var c = 30
    console.log("INNER :", a); //->10
}

//console.log(a); -> undefined
//console.log(b); -> undefined
//console.log(c); -> defined [ERROR] thats why we dont use var
 let a = 300
 
//console.log(a); ->300

//***************************************************************************************************/


function one(){
    const username = "KM"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two()
}

one()


if(true){
    const username = "km"
    if(username ===  "km"){
       const website = " youtube"
       console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);



///////////////////////// interesting //////////////////

//addOne(5)  //executed before initialiazation
function addOne(num){
    return num + 1
}

addOne(5)


//addTwo(5)  //unexecuted //hoisting
const addTwo = function(num){    //expression
    return num + 2
}

addTwo(5)




