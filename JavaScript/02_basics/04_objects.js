// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123ABC";
tinderUser.name = "RajaJi";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regulerUser = {
    email: "rajkumar@google.com",
    fullName: {
        userFullName: {
            firstName: "devraj",
            lastName: "kumhar"
        }
    }
}

// console.log(regulerUser);
// console.log(regulerUser.fullName);
// console.log(regulerUser.fullName.userFullName);
// console.log(userFullName); //it gives error of refrence not defined

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {obj1, obj2};

// console.log(obj3);

// const obj4 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2); //it is better syntex from above.

const obj4 = {...obj1, ...obj2} // we are using this sprade oprator for adding to objects
// console.log(obj4);

const users = [
    {
        id: 123,
        gmail: "dev@gmail.com"
    },
    {
        id: 23,
        gmail: "devraj@gmail.com"
    },
    {
        id: 3,
        gmail: "devrajkumhar@gmail.com"
    }
]

users[1].gmail;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


