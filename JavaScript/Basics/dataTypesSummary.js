//  Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId);

const bigNumber = 3213456876542n

// Reference (Non Primitive)

// Array, Objects, Functions 

const heros = ["shaktiman", "ironman", "hulk"];
let myObj = {
    name: "devraj",
    age: 21,
}

const myFunction = function(){
    console.log("Hello Devraj");
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Premitive), Heap (Non-Premitive)

let myYoutubeName = "addashree"
let anotherName = myYoutubeName
anotherName = "devraj Kumhar"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne
userTwo.email = "devraj@google.com"

console.log(userOne);
console.log(userTwo);

