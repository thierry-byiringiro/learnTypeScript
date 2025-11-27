class Person{
    private age : number;
    public name :string;
    protected location : string
    constructor(name:string,age:number,location:string){
        this.name = name;
        this.age = age
        this.location = location;
    }
    showName(): void{
        console.log(`Hello my name is ${this.name} and i am ${this.age} yrs old , I'm from ${this.location}`)
    }
}

const newP = new Person("aime",21,"Rusizi");
// console.log(newP.name); // this one prints an error
