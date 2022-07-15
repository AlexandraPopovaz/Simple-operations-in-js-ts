//1. Sum
export const sum = function (a:number, b:number) {
    return console.log(a + b);
};
sum(5, 5);

//2. divide
const divide = function (x: number, y: number) {
    return console.log(x / y);
};
divide(10, 2);

//3. multiplication
const mul = function (f: number, p: number) {
    return console.log(f * p);
};
mul(2, 2);

export {divide, mul};
    
//4. subtraction
const minus = function (q: number, w: number) {
    return console.log(q - w);
};
minus(10, 1);

//5. One function with 3 values from previous functions
const sum3 = (a:number, b:number) => a + b;
const divide3 = (x: number, y: number) => x / y;

let math = {
    sum3: (a:number, b:number) => a + b,
    divide3: (x: number, y: number) => x / y,
    mathMath: function () {
console.log(sum3(1, 3));
console.log(divide3(4, 2));
    },
};
    
math.mathMath();