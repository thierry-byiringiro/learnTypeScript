//first
interface Car {
    brand: string;
    model?: string;
    price?: number | string;
}

function printCarModel(car: Car): void {
    if (car.model) {
        console.log(car.model!.toUpperCase());
    }
    if (typeof car.price === "number") {
        console.log(car.price!.toFixed(2));
    }
    console.log(Number(car.price).toFixed(2));
}

printCarModel({ brand: "Toyota", price: '3000' });
//second
const logOrder = (order: any) => {
    console.log(`Shipping to: ${order?.customer?.address?.city}`);
};

logOrder({
    customer: {
        name: 'Jane',
        // address is missing
    }
});

//third
type Direction = "up" | "left" | "right" | "down";

function move(direction: Direction, distance: number) { }

// TESTS

move('up', 10);
move('left', 5);

move(
    // @ts-expect-error - "up-right" is not a valid direction
    'up-right',
    10
);

move(
    // @ts-expect-error - "down-left" is not a valid direction
    'down-left',
    20
);

move(
    'up',
    // @ts-expect-error - "20" is not a valid distance
    '20'
);

interface Recipe{
    title : string,
    ingredients : {
        name?:string,quantity?:number | string , price?:number
    }[],
    instructions : string
}
const processRecipe = (recipe: Recipe) => {
    console.log(recipe.ingredients);
};
//third
processRecipe({
    title: 'Chocolate Chip Cookies',
    ingredients: [
        { name: 'Flour', quantity: 4 },
        { name: 'Sugar', quantity: '1 cup', price: 5 },
    ],
    instructions: '...',
});



const processValue = (value : string | number | boolean | null | undefined) : void  => {
    if(typeof value == "string"){
        console.log(value.toUpperCase());
    }else if (typeof value == "number"){
        console.log(value.toFixed(2))
    }else if(typeof value == "boolean"){
        console.log(value ? true : false);
    }else if(value == null || value == undefined){
        throw new Error('We currently do not support the type of ' + value);
    }
};

processValue("Aime");
processValue(20);
processValue(false);
console.log(processValue(null));
console.log(processValue(undefined));