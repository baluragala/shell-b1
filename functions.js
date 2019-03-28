
function Product(title, price) {
    this.title = title;
    this.price = price;
}

var p1 = new Product("iphone", 90000);
var p2 = new Product("note", 60000)


function MyProduct(title, price) {
    var this1 = {};
    this1.title = title;
    this1.price = price;
    return this1;
}

var p3 = new Product("iphone", 90000);
var p4 = new Product("note", 60000);



//default
function test(a = 0, b = 0) {
}
