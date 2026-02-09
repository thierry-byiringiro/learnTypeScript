const countTheDigit = (n: number, d: number): number => {
    return Array.from({ length: n }, (k: number, i) => (i + 1) ** 2).filter(el => String(el)).join("").split("").filter(el => Number(el) === d).length;
}
console.log(countTheDigit(5750, 0)) //expected 4700 but got 4699