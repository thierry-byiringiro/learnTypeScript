class DataStore<T>{
    items : T[];
    constructor(items : T[]){
        this.items = items;
    }

    add(item : T){
        this.items.push(item);
    }

    get(index:number) : T | undefined{
        return this.items[index];
    }

    getAll() : T[]{
        return this.items;
    }

}

const storeNumbers = new DataStore<number>([1,2,4,5,6]);
const storeStrings = new DataStore<string>(["Aime","Thierry","Byiringiro"]);
storeNumbers.add(7);
storeStrings.add("Ronaldo");

console.log(storeNumbers.getAll());
console.log(storeStrings.getAll());

console.log(storeNumbers.get(5))
console.log(storeStrings.get(3))