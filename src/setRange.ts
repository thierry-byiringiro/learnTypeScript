type input = [boolean,{name:string,age:number}];
type output = {x:boolean,y:boolean}
const setRange = (range: input): output => {
  const x = range[0];
  const y = range[1];

  return { x, y: y.age > 10 };
};

console.log(setRange([true, { name: 'Patrick', age: 3}]));