
export const head = (n : number[]) =>{
    return n[0];
}

export const tail = (n : number[]) =>{
    return n.splice(1,n.length - 1);
}

export const init = (n : number[]) =>{
    return n.splice(0,n.length - 1);
}

export const last = (n : number[]) =>{
    return n[n.length -1 ];
}
console.log(head([1,2,3,4,5]))
console.log(tail([1,2,3,4,5]))
console.log(init([11,10]))
console.log(last([1,2,3,4,5]))