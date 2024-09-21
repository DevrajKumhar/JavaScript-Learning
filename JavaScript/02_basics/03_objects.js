// singleton
// Object.create()

// object literals
const mySymbol = Symbol("key1");

const jsUser = {
    name: "Devraj",
    [mySymbol]: "Hello Devraj",  //syntext of using any symbol in objects
    age: 20,
    gmail: "devraj@gmail.com",
    isLoggedIN: true,
    lastLOginDays: ["monday", "friday"]
}
// console.log(jsUser.lastLOginDays);
// console.log(jsUser["gmail"]);
// console.log(jsUser[mySymbol]);

jsUser.gmail = "devraj@microsoft.com";
// Object.freeze(jsUser);                 // After freezing any object we can't modified the values of object. 
jsUser.gmail = "kumhar@devraj.com"

// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello JS user, How are you"); 
// }

// console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); 
}

console.log(jsUser.greetingTwo());
