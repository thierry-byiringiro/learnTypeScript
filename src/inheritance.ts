class Person{
    fullName;
    age;
    constructor(fullName : string,age : number){
        this.fullName = fullName;
        this.age = age;
    }
    describe(){
        return  `Hello I am ${this.fullName} and I am ${this.age} years old`;
    }
}

const a = new Person("aime Thierry",33);
a.describe();
class Student extends Person{
    private department : string;
    constructor(fullName : string,age:number,department:string){
        super(fullName,age);
        this.department = department;
    }
    describe(){
        return super.describe() + ` I am in the department of ${this.department}`;
    }
}

const b = new Student('HOPE',10,"IT");
console.log(b.describe());