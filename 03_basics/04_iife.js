//Immediatley Invoked Function Expressions (IIFE)

//to prevent global pollution problem
//immediate execution

(function chai(){
    //named IIFE
    console.log('DB connected');
})() ; //\\

//()() //()->function define, ()->execution
//;
//IIFE deosnt know where to stop the context, to work properly 
// we use ;

( (name) => {
    //unnamed/simple IIFE
    console.log('DB Connected Two ${name}');
} )('KM')

// just like chai()