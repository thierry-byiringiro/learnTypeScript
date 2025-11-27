abstract class Vehicle{
    name : string;
    color: string;
    tireNumbers : number;
    category: string;
    abstract vehicleType() : string;
    constructor (name : string,color:string,tireNumbers:number,category:string)
    {
    this.name = name;
    this.color = color;
    this.tireNumbers = tireNumbers;
    this.category = category;
    }
    getFullDetails() : string{
        //return `The ${this.vehicleType()} named ${this.name}, with ${this.color} color, has ${this.tireNumbers} tires, to drive it you need to have ${this.category} category`;
        return `The ${this.vehicleType()} named ${this.name}, is ${this.color} and has ${this.tireNumbers} tires. A Category ${this.category} license is required to drive it.`;
    }
}

class Car extends Vehicle{
    private model : string;
    private type : string;
    constructor(name : string,color:string,tireNumbers:number,category:string,model : string,type : string){
        super(name,color,tireNumbers,category);
        this.model = model;
        this.type = type;
    };
    vehicleType(): string {
        return `${this.type}`;
    }
    
    getFullDetails() : string{
        return super.getFullDetails() + ` with model which is ${this.model}`;
    }
    
}

const toyota = new Car("ToyotaB", "Blue",4,"B","MB4","Car");
console.log(toyota.getFullDetails());
class MotorBike extends Vehicle{
    private model : string;
    private type : string;
    constructor(name : string,color:string,tireNumbers:number,category:string,model : string,type : string){
        super(name,color,tireNumbers,category);
        this.model = model;
        this.type = type;
    };
    vehicleType(): string {
        return `${this.type}`;
    }
    
    getFullDetails() : string{
        return super.getFullDetails() + `. it is  ${this.model}`;
    }
    
}