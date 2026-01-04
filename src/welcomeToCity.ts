const sayHello  = (name : string[],city : string,state : string) : string => {
    if(name.length > 1){
        return `Hello ${name.join(" ")} ! Welcome to ${city}, ${state}!`
    }
        return `Hello ${name[0]} ! Welcome to ${city}, ${state}!` 
}
console.log(sayHello(["aime"],"Illinois","Chicago"))