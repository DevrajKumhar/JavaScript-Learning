// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["saktiman", "ironman"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);

// Array Methods:-
// myArr.push(6)
// myArr.push(7)
// myArr.pop()         //last value of array is removed by pop operation
// myArr.unshift(8)    //unshift operation is used to insert values in starting. BUT THIS IS A BAD PRACTICE  
// myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.includes(4));
// console.log(myArr.indexOf(2));
// console.log(myArr.indexOf(8));

// const newArr = myArr.join()

// console.log(newArr);
// console.log(typeof newArr);

// console.log(myArr);
// console.log(typeof myArr);

// slice and splice
//slice() creates a new array with a portion of elements copied from the original array.
//splice() mutates the original array itself by removing, replacing or adding elements to it.
// console.log("A ",myArr);


const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ",myArr);

const myn2 = myArr.splice(1, 3)

// console.log(myn2);
// console.log("C ",myArr);

