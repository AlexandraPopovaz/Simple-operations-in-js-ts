import {sum} from './usualFunctions'
sum(1, 1);

import {divide, mul} from './usualFunctions'
divide(1, 2);
mul(1, 2);

//1-long version with 2 parameters
const sum2 = (a: number, b: number) => {
    return console.log(a + b);
};
sum2(1, 1);


//2-function with string output (with reusable variable)
const x = (firstName: string) => {
    return console.log(`hi ${firstName}`);
};
x("Alex");


//3-function without parameters (long version)
const smth = () => {
    return "hedgehog"
};
console.log(smth());


//4-without return (implicit return)
const smth2 = () => "in the fog";
console.log(smth2());


//5
const smth3 = (title: string) => {
    let x = title;
    return x;
};
console.log(smth3("anything"));

//6 
let plane = {
    planeName: "Sessna172",
    year: 1964,
    seatsNumber: 4,
    regularFunction() {
        console.log(`the plane is called ${plane.planeName}`);
    },
    arrowFunction: () => {
        console.log(`It was made in ${plane.year}`);
    
    },
};
plane.regularFunction();
plane.arrowFunction();

//7 A few objects inside one function - user can take one or more
let plane1 = {
    planeName: ["Sessna", "Parks", "Fairchild"],
    year: 1964,
    newFunction: function () {
            console.log(`the best plane is ${plane1.planeName[0]}`);
    }
};
plane1.newFunction();


//8.1 Task from video
const myName = function user(myName:string) {
    return console.log(`My name is ${myName}`)
};
myName("Alex");


//8.2 Task from video
const myName2 = (myName2:string) => {
    let x = myName2;
    return x;
};
console.log(myName2("My name is Alexandra"));


//8.3 Task from video
const greeting = () => "Hello, how are you?"
console.log(greeting());