interface Result<A>{
    value : A,
    success : boolean
}

let numResult : Result<number> = {
    value : 10,
    success : true
};
let strResult : Result<string> = {
    value : "my age",
    success : false
};
console.log(numResult,strResult)

interface Store<E>{
    items : E[],
    add(item : E) : void,
    get(index : number) : E,
    getAll() : E[]
}
let index = 1;
let newStore : Store<string> = {
    items : ["aime","thierry"],
    add(item){
        this.items.push(item);
    },
    get(index) : string {
        return this.items[index]!;
    },
    getAll(){
        return this.items;
    }

}
newStore.add("byiringiro");
console.log(newStore.getAll());
console.log(newStore.get(1));


