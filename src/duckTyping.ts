//SIMULATING or immitate NOMINAL TYPING 
type USD = number & {readonly __brand: "USD"};
type EUR = number & {readonly __brand: "EUR"};

let musd = 100 as USD;
let meur = 100 as EUR;

// musd == meur // this gives an error because of the tag brand that identifies the USD and EUR uniquel
console.log(musd);