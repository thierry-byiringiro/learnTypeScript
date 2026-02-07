function shorterReverseLonger(a: string, b: string): string {
    if (a.length > b.length) {
        a = a.split("").reverse().join("");
        return b.concat(a).concat(b);
        return "";
    } else if (b.length > a.length) {
        b = b.split("").reverse().join("");
        return a.concat(b).concat(a);
    } else {
        a = a.split("").reverse().join("");
        return b.concat(a).concat(b);

    }
}
console.log(shorterReverseLonger("first", "abcde"));//abcdetsrifabcde
console.log(shorterReverseLonger('nufan', 'pjcjfhzy'));