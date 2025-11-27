class Person {
    private _name: string;
    private _age!: number;

    constructor(name: string, age: number) {
        this._name = name;
        this.age = age;
    }

    public get FullInfo() {
        return `I am ${this._name} and I am ${this._age} years old`;
    }

    public set age(thisAge: number) {
        if (thisAge < 18 || thisAge > 30) {
            throw new Error("We only accept youth.");
        }
        this._age = thisAge;
    }
}

const aime = new Person("HOPE", 34);
// aime.age = 25;   
console.log(aime.FullInfo);
