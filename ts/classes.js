"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductService = /** @class */ (function () {
    //private _products: Array<Product>;
    function ProductService(_products) {
        this._products = _products;
        //this._products = products;
    }
    ProductService.prototype.add = function (product) {
        this._products.push(product);
    };
    Object.defineProperty(ProductService.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (value) {
            this._products = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProductService;
}());
var s = new ProductService([{ title: 'p1', price: 10, stock: 10 }]);
