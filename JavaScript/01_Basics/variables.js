const accountId = 876546
let accountMail = "jaishreeram@gmail.com"
/*
Prefer not to use var
Because of issue of block scope and functional scope
*/
var accountPassward = "12345"
accountCity = "Jaipur"
//if we declaire a variable without asigning any value So javascript read this variable as undefined.
let accountState;

// accountId = 64532 we can't change the value of constant variables

// aiccountMail = "ram@gmail.com"
// accountPassward = "54231"
// accountCity = "Mumba"

console.log(accountId);
console.table([accountId,accountMail,accountPassward,accountCity,accountState]);
