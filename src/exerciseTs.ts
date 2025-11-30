interface Car {
    brand: string;
    model?: string;
    price?: number | string;
}

function printCarModel(car: Car) : void {
    if(car.model){
    console.log(car.model!.toUpperCase());
    }
    if(typeof car.price === "number"){
    console.log(car.price!.toFixed(2));
    }
    console.log(Number(car.price).toFixed(2));
}

printCarModel({ brand: "Toyota" , price: '3000'});


const logOrder = (order: any) => {
  console.log(`Shipping to: ${order?.customer?.address?.city}`);
};

logOrder({
  customer: {
    name: 'Jane',
    // address is missing
  }
});

type Direction = "up" | "left" | "right" | "down";

function move(direction: Direction, distance: number) {}

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