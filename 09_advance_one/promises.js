const promiseOne = new Promise(function(resolve, reject){
   //do an async calls
   //db calls, cryptography, netwrok calls
   
   setTimeout(function(){
    console.log('Async task is completed');
    resolve()
   },1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

}).then(function(){
    console.log('Async 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "chai", email: "chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true //false
        if(!error){
            resolve({username: "km", password:"1601"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The Promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
     let error = true //false
     if(!error){
        resolve({username: "km", password:"1601"})
        } else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

//async await

//async function consumePromiseFive(){
//    const response = await promiseFive  
//    console.log(response);  
//}

//consumePromiseFive()

async function consumePromiseFive(){
    try {
        const response = await promiseFive  
        console.log(response); 
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//async function getAllUsers(){
//   try {
//        const response = await fetch('url')
//        const data = await response.json() ///
//        console.log(data);
    
//   } catch (error) {
//      console.log("E:", error);
//   }
//}
getAllUsers()

fetch('url')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

//value printing ?????
//