import * as func from './setupF'
import {bagFunction} from './setupF';

console.log(func.math(2, 2));

const sumResult = func.sum(1, 1)
console.log(sumResult);

const divideNumbers = func.divide(10, 1)
console.log(divideNumbers);

const sayHi = func.x("Hi, Alex");
console.log(sayHi);

const strangeCart = func.smth("\"Hedgehog in the fog\"");
console.log(strangeCart);

const sayHello = func.sayWelcome("Иван", "Иванов");
console.log(sayHello);

const hi = func.greeting();
console.log(hi);

const name = func.myName("Alex");
console.log(name);

const bag = {
    size: 2,
    color: "red",
    location: "table"
};
const bag2 = {
    size: 3,
    color: "red",
    location: "table"
};
console.log(bagFunction(bag));
console.log(bagFunction(bag2));

const plane = {
    planeName: ["Sessna", "Parks", "Fairchild"],
    year: 1964,
};
const newVariable = func.planeName(plane);
console.log(newVariable);
