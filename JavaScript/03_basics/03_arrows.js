const user = {
    userName: 'Devraj',
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to my page.`);
        // console.log(this);        
        }
}

// user.welcomeMessage();
// user.userName = "Rajaji";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     userName: "Devraj"
//     console.log(this.userName);   
// }
// chai();

// const chai = function(){
//     userName: "Devaji"
//     console.log(this.userName);    
// }
// chai();

// const chai = () => {
//     let userName = "hanji"
//     console.log(this);
    
// }
// chai()

// arrow function : () =>

    //explicit return 
// const addTwo = (n1, n2) => {
//     return n1+n2;
// }

    //implicit return 
// const addTwo = (n1, n2) => n1+n2;
// const addTwo = (n1, n2) => (n1+n2);

    // object ko return karne k liye bhi paranthesis ki jarurat hoti hai
const addTwo = (n1, n2) => ({userName: "Devraj ji Namste"})    
// console.log(addTwo(10, 99));

// const myarr = [1, 3, 4, 6, 7]
// myarr.forEach()