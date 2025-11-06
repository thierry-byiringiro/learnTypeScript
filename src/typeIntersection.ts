type Personal =  {
    name : string;
    age : number;
}

type Contact = {
    email : string;
    phone : string;
}

type Candidate  = Personal & Contact;

let firstC : Candidate = {
    name :"aime",
    age : 21,
    email : "byiringiroaimethierry@gmail.com",
    phone : "0790950399"
}

console.log(firstC);
