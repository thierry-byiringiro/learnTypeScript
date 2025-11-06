function tryit(a : number | string,b : number | string) : number | string {
        if(typeof a === 'number' && typeof b === 'number'){
            return a + b;
        }else if(typeof a === 'string' && typeof b === 'string'){
            return a.concat(b);
        }else{
            return "can't do operation whilst the two values are of different types";
        }
}
console.log(tryit("aime","byiringiro"));