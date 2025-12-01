// interface User
const printUserInfo = (obj:{
    name:string,
    email:string,
    age?:number,
    [key:string] : any
}) : string =>{
    if(obj.age !== undefined){
        return `Hello I am ${obj.name} my email is ${obj.email} and I am ${obj.age} years old`;
    }
    return `Hello I am ${obj.name} my email is ${obj.email}`;
}
console.log(printUserInfo({ name: "Alice", email: "alice@example.com", age:30,role: "admin" }));
console.log(printUserInfo({ name: "Bob", email: "bob@example.com" }));


interface Message{
    message?:string,
    msg?:string,
    [key:string] : number | string
}

const logMessage = (obj : Message) : string => {
    if(obj.message != undefined){
        return obj.message;
    }else if(obj.msg != undefined){
        return obj.msg;
    }
    return "No message provided";
}
console.log(logMessage({ msg: "World!" , level : "this one is not normal"}));
console.log(logMessage({ message: "Hello!" }))



interface Hall{
    width?:number,
    height?:number,
    radius?:number,
    [key : string] : any
}
let area;
const calculateArea = (obj : Hall) : string | number => {
    if("width" in obj && "height" in obj){
        area = obj.width * obj.height;
        return `The area of rectangle is ${area}`
    }else if("radius" in obj){
        area = 3.14 * obj.radius **2;
        return `The area of circle is ${area} `;
    }
    return "None of the sizes are provided";
}
console.log(calculateArea({ width: 10, height: 5 }));
console.log(calculateArea({ radius: 3 }))
console.log(calculateArea({ width: 4, height: 6, color: "red"}))