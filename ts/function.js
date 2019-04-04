// function add(x: number, y: number): number {
//     return x + y;
// }
var t = add(10, 20);
function calculatePrice(price, tax, discount) {
    return price + tax - discount;
}
var sum = function (x, y) { return x + y; };
function addMaker(a) {
    return function (b) {
        return a + b;
    };
}
function identity(x) {
    return x;
}
var ref1 = identity;
var ref = addMaker(10);
function add(x, y) {
    return;
}
