
export function sortMyString(s: string) : string {
let a = s.split("").filter((_,el) => el % 2 == 0);
let b = s.split("").filter((_,el) => el % 2 != 0);
return a.join("") + " " + b.join("");
};
console.log(sortMyString("X0SxBrdjA7W90HiQyX1aG"));
console.log(sortMyString("YCOLUE'VREER"))
