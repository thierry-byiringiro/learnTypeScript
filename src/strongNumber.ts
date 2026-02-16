const strongNumber = (num: number): string => {
  if (num == 1 || num == 2) {
    return "STRONG!!!!";
  } else if (String(num).length == 1) {
    let res: number = 1;
    for (let i = 0; i <= num; i++) {
      res = res * i;
    }
    return res === num ? "STRONG!!!" : "Not Strong !!";
  } else {
    let newString = String(num).split("");
    let newArr: number[] = [];
    newString.map((el) => {
      let res: number = 1;
      for (let i = 1; i <= Number(el); i++) {
        res = res * i;
      }
      newArr.push(res);
    });
    let finalResult = newArr.reduce((a, b) => {
      return a + b;
    });
    return finalResult === num ? "STRONG!!!" : "Not Strong !!";
  }
};
console.log(strongNumber(1));
console.log(strongNumber(123));
console.log(strongNumber(145));
console.log(strongNumber(150));
