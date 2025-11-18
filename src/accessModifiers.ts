class Person{
    private name :string;
    constructor(name:string){
        this.name = name;
    }
    showName(): void{
        console.log(`Hello my name is ${this.name}`)
    }
}

const newP = new Person("aime");
// console.log(newP.name);
console.log(Person.name)