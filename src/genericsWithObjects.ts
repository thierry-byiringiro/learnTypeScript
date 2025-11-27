const updateProperty = <T,K extends keyof T>(obj:T,k: K,v : T[K]) : T => {
    return {
        ...obj,
        [k] : v
    }
}
console.log(updateProperty({name : "aime",age : 20},"age",30));
console.log(updateProperty({name : "Cr",age : 42},"name","CR7"));



const objectKeys = <T extends object>(dd:T) : (keyof T)[] => {
    return Object.keys(dd) as (keyof T)[]
}