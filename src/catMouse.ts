 function catMouse(x: string): string {
  return x.split("").filter((el) => {
    return el === '.'
  }).length <= 3 ?  "Caught!" : "Escaped!"
}
console.log(catMouse('C....m'));
console.log(catMouse('C..m'))