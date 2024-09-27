function myName() {
    console.log("D");
    console.log("E");
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J");
}

//myName();

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);    
// }

function addTwoNumber(number1, number2) {
    return number1 + number2;    
}

const result = addTwoNumber(20, 50);
// console.log("Result = ",result);

function logInMessage(userName) {
    if (!userName) {
        console.log("Please Enter User Name");
        return
    }
    return `${userName} just logged in`;
}
// console.log(logInMessage());

// function calculateCartPrice(num1){
//     return num1;
// }
// console.log(calculateCartPrice(90,25));

function calculateCartPrice(...num1){  // ...value = rest oprator in function
    return num1;
}
// console.log(calculateCartPrice(90,25,100,254,70));

const user = {
    userName: "Devraj",
    price: "199"
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.userName} and price is ${anyObject.price}`);   
}

// handleObject(user);

// handleObject({
//     userName: "ram",
//     price: "999"
// })

const myNewArray = [100, 200, 250, 400, 550];

function returnThirdValue(getArray){
    return getArray[2];
}
// console.log(returnThirdValue(myNewArray));
console.log(returnThirdValue([100, 200, 250, 400, 550]));
