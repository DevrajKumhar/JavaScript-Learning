// var c = 500;
//Global variables
let a = 100;
if(true){
    //block variables
    let a = 10;
    // console.log("inner: ", a);
    
    const b = 20;
    var c = 30;
}

// console.log(a); //because these are define in scope and these are Block variables.
// console.log(b); 
// console.log(c);    //because these are define in scope and these are Global variables.

// console.log("outer: ",a);


/* Nested function and scopes: */
function one(){
    const name = "Devraj";

    function two(){
        const website = "youtube.com";
        console.log(name);
        
    }
    // console.log(website);
    
    two();
}
one();

if(true){
    const name = "Devraj";
    if(name == "Devraj"){
        const website = " youtube"
        console.log(name + website);
    }
    // console.log(website);
}
// console.log(username);
