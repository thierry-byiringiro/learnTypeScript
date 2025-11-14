type MathOperation = (a : number,b : number) => number;

const add : MathOperation = (x,y) => x + y;
const sub : MathOperation = (x,y) => x - y;
const mult : MathOperation = (x,y) => x * y;
const div : MathOperation = (x,y) => x / y;
const mod : MathOperation = (x,y) => x % y;
// console.log(typeof add); // function
console.log(add(5,5));
console.log(sub(5,5));
console.log(mult(5,5));
console.log(div(5,5));
console.log(mod(5,5));