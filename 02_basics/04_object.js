//constructor non singleton object 
//const tinderUser = new Object() //singleton object
const tinderUser = {} //non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); //empty object

const regularUser = {
    email :"some@gmail.com",
    fullname : {
        userfullname : {
                firstname : "K",
                lastname : "M"
        }
    }
}

console.log(regularUser.fullname?.userfullname.firstname);
//?optional chaining 

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2)
//console.log(obj3);


//spread operartor
const obj4 = {...obj1, ...onj2}
console.log(obj3);

const users = [
    {
        id:1,
        email: "k@gmail.com"
    },
    {

    },
    {

    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//de-structuring
const course = {
    coursename : "js",
    price : 999,
    courseInstructor : "HC"
}

//course.courseInstructor
const {courseInstructor : instructor} = course

//console.log(courseInstructor);
console.log(instructor);

//react - destructure
const navbar = ({company}) => {

}
navbar(company = "KM")

//api-json
    //{
    //"name" : "KM",
    //"coursename" : "js",
    //"price" : "free"
    //}

    [
        {},
        {},
        {}
    ]

    //randomuserme
    //json formatter