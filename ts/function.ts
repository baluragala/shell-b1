// function add(x: number, y: number): number {
//     return x + y;
// }

let t = add(10, 20);

function calculatePrice(price: number, tax: number, discount?: number): number {
    return price + tax - discount;
}




let sum = (x: number, y: number): number => x + y;


type addMakerRef = (ba: number) => number;


function addMaker(a:number): addMakerRef {
    return function (b:number) {
        return a + b;
    }
}



function identity(x: number):number {
    return x;
}

let ref1:addMakerRef = identity;


let ref:addMakerRef = addMaker(10);




function add(x: number | string, y: number | string): string|number {
    return ;
}
