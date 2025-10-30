// let tupp : [string,number] = ["CR7",7];
// tupp.push(1);
// console.log(tupp);
// enum Size{
//     Small,
//     Medium,
//     Large,
// }
// let mySize : Size = Size.Medium;
// console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(1000, 2020));
export {};
//# sourceMappingURL=index.js.map