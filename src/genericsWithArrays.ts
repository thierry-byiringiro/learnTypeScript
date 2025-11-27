// returning the last element in the array
const lastItem = <T extends number | string>(arr : T[]) : T[]  =>{
    return arr.map((el) => {
        if(typeof el == 'number'){
            return (el * 2 as T);
        }else{
            return (el.toUpperCase() as T)
        }
    })
} 
console.log(lastItem([1, 2, 3]));
console.log(lastItem(["a", "b"]));
console.log(lastItem([]))


const arr : Array<boolean> = [true,false,true];
const arr2 : Array<object> = [{a : 1},{b : 2}];
