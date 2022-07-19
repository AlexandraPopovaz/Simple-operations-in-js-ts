export const sum = function (a:number, b:number) {
    return a + b;
};

export const divide = function (x: number, y: number) {
    return x / y;
};

export const mul = function (f: number, p: number) {
    return f * p;
};

export const minus = function (q: number, w: number) {
    return q - w;
};

export const math = (a: number, b: number) => {
    const sumResult = sum(a, b);
    const divideResult = divide(a, b);
    const mulResult = mul(a, b);
    const minusResult = minus(a, b);
    return {
        sum: sumResult,
        divide: divideResult,
        mul: mulResult,
        minus: minusResult
    };
};

export const x = (firstName: string) => {
    return `${firstName}. Was it a hard day?`;
};

export const smth = (title: string) => {
    return "Yes," + "it is a really strange cartoon - " + title;
};

export const firstF = (title2: string) => {
     return `${title2}`;
}

export const planeName = function(plane: any) {
    return `the best plane is ${plane.planeName[0]}`
};

export const myName = function user(myName:string) {
return `My name is ${myName}`
};

export const sayWelcome = function (userFirstName: string, userLastName: string) {
    return `Добро пожаловать, ${userLastName} ${userFirstName}`
};

export const greeting = () => "Hello, how are you?"
   
export const bagFunction = function (bag: any) {
    return `${bag.size}`
};  
