type Operation = (a : number,b : number) => number;
// Define a missing TypeScript types

function applyOperation(a:number,b:number, operation : Function): number{
  return operation(a, b);
}

const add : Operation  = (x, y) => x + y;
const multiply : Operation = (x, y) => x * y;

console.log(applyOperation(10, 5, add))
console.log(applyOperation(5,5,multiply));