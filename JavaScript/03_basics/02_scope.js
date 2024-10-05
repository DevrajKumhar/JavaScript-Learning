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
        // console.log(name);
        
    }
    // console.log(website);
    
    two();
}
one();

if(true){
    const name = "Devraj";
    if(name == "Devraj"){
        const website = " youtube"
        // console.log(name + website);
    }
    // console.log(website);
}
// console.log(username);


// ************************************Intresting********************************************//

// console.log(addone(5)); //it is right and only a function
function addone(num){
    return num + 1;
}

// console.log(addone(5));

// console.log(addTwo(5));  //it is not run and it is function and declare in a variable
const addTwo = function(num){
    return num + 2;
}
// console.log(addTwo(5));
